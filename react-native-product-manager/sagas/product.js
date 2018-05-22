import {
    put,
    takeLatest,
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/product"
import {
    GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, SEARCH_PRODUCT, GET_SINGLE_PRODUCT
} from "../actionTypes/product";
import { Alert, Vibration } from 'react-native';
import { SERVICE_URL } from "../utils/utils";

function* getProducts(action) {
    try {
        let products = yield fetch(`${SERVICE_URL}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* searchProducts(action) {
    try {
        let products = yield fetch(`${SERVICE_URL}/products?title_like=${action.search}&_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.searchProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* deleteProducts(action) {
    try {
        let product = yield fetch(`${SERVICE_URL}/products/${action.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        yield put(actionCreators.deleteProductSuccess(action.id))
        yield vibrate
    } catch (error) {
        yield put(actionCreators.deleteProductFailure(error))
    }
}

function* getProduct(action) {
    try {
        let product = yield fetch(`${SERVICE_URL}/products/${action.id}`).then(r => r.json());
        yield put(actionCreators.getSingleProductSuccess(product))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* addProduct(action) {
    try {
        let product = yield fetch(`${SERVICE_URL}/products`, {
            body: JSON.stringify(action.product),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        yield put(actionCreators.addProductSuccess(product))
        yield alert()
    } catch (error) {
        yield put(actionCreators.addProductFailure(error))
        yield alert()
    }
}

function alert(){
    Alert.alert('Success','Product Saved Successfully')
}

function vibrate(){
    Vibration.vibrate(1000);
}

export function* productWatchers() {
    yield takeLatest(GET_PRODUCTS, getProducts);
    yield takeLatest(DELETE_PRODUCT, deleteProducts)
    yield takeLatest(SEARCH_PRODUCT, searchProducts)
    yield takeLatest(GET_SINGLE_PRODUCT, getProduct)
    yield takeLatest(ADD_PRODUCT, addProduct)
}