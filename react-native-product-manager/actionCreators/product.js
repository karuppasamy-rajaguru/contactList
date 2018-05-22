import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCT,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_TO_WISH,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    SEARCH_PRODUCT,
    EMPTY_PRODUCTS,
    SEARCH_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT
} from "../actionTypes/product";

export function getProducts(page, limit) {
    return {
        type: GET_PRODUCTS,
        page,
        limit
    }
}

export function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}

export function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
    }
}

export function getProductSuccess(product) {
    console.log(product);
    return {
        type: GET_PRODUCT_SUCCESS,
        product
    }
}

export function getProductFailure(error) {
    return {
        type: GET_PRODUCT_FAILURE,
        error
    }
}

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function addProductSuccess(product) {
    return {
        type: ADD_PRODUCT_SUCCESS,
        product
    }
}

export function addProductFailure(error) {
    return {
        type: ADD_PRODUCT_FAILURE,
        error
    }
}

export function addProductToWish(wish) {
    return {
        type: ADD_PRODUCT_TO_WISH,
        wish
    }
}

export function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        id
    }
}

export function deleteProductSuccess(id) {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        id
    }
}

export function deleteProductFailure(error) {
    return {
        type: DELETE_PRODUCT_FAILURE,
        error
    }
}

export function searchProduct(search, page, limit) {
    return {
        type: SEARCH_PRODUCT,
        search,
        page,
        limit
    }  
}

export function emptyProducts() {
    return {
        type: EMPTY_PRODUCTS
    }
}

export function searchProductsSuccess(products) {
    return {
        type: SEARCH_PRODUCT_SUCCESS,
        products
    }
}

export function getSingPleroduct(id) {
    return {
        type: GET_SINGLE_PRODUCT,
        id
    }
}

export function getSingleProductSuccess(product) {
    return {
        type: GET_SINGLE_PRODUCT_SUCCESS,
        product
    }
}