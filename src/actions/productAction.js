import axios from 'axios';

import { GET_PRODUCTS, PRODUCT_LOADING, GET_ERRORS } from './type';

// Get all product
export const getAllProduct = () => dispatch => {
    dispatch(setProductLoading());

    axios.get('https://mockshopapi.herokuapp.com/api/v1.0/products')
        .then(res => dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_PRODUCTS,
            payload: {}
        }))
}

// create  product
export const createProduct = (productData, history) => dispatch => {
    dispatch(setProductLoading());

    axios.post('https://mockshopapi.herokuapp.com/api/v1.0/products', productData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};


export const setProductLoading = () => {
    return {
        type: PRODUCT_LOADING
    }
}