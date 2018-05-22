import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
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
    GET_SINGLE_PRODUCT,
    GET_SINGLE_PRODUCT_SUCCESS
} from "../actionTypes/product";

export default (prevState = {
    products: [],
    product: {},
    searchProducts : [],
    isLoading: false,
    isRefreshing: false,
    page: 1,
    limit: 8,
    wish : []
}, action) => {
    console.log(action.type);
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...prevState,
                isLoading: prevState.products.length > 0 ? false:true,
                page: action.page
            }
        case GET_PRODUCTS_SUCCESS:
            return { ...prevState,
                isLoading: false,
                products: prevState.products.concat(action.products)
            }
        case GET_PRODUCT:
            return { ...prevState,
                isLoading: true
            }
        case GET_PRODUCT_SUCCESS:
            return { ...prevState,
                isLoading: false,
                product: action.product
            }
        case ADD_PRODUCT:
            return { ...prevState,
                isLoading: true,
                product: action.product
            }
        case ADD_PRODUCT_SUCCESS:
            return { ...prevState,
                isLoading: false,
                product: action.product
            }
        case GET_PRODUCTS_FAILURE:
        case GET_PRODUCT_FAILURE:
        case ADD_PRODUCT_FAILURE:
        case DELETE_PRODUCT_FAILURE:
            return { ...prevState,
                isLoading: false,
                error: action.error
            }
        case ADD_PRODUCT_TO_WISH:
            return { ...prevState,
                isLoading: false,
                products: [...prevState.products, prevState.products[action.wish].wish = true]
            }
        case DELETE_PRODUCT:
            return { ...prevState,
                isLoading: true,
                id : action.id
            }
        case DELETE_PRODUCT_SUCCESS:
            return { ...prevState,
                isLoading: false,
                products: prevState.products.filter(Product => Product.id !== action.id)
            }
        case SEARCH_PRODUCT:
            return { ...prevState,
                isLoading: true,
                search: action.search,
                page : action.page,
                limit : action.limit
            }
        case EMPTY_PRODUCTS:
            return { ...prevState,
                products : []
            }
        case SEARCH_PRODUCT_SUCCESS:
            return { ...prevState,
                isLoading: false,
                searchProducts : action.products
            }
        case GET_SINGLE_PRODUCT:
            return { ...prevState,
                isLoading: true,
                id : action.id
            }
            
        case GET_SINGLE_PRODUCT_SUCCESS:
            return { ...prevState,
                isLoading: false,
                product: action.product
            }            
        default:
            return prevState;

    }
}