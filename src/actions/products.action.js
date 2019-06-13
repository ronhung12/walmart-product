import axios from 'axios';

export const pageNumber = 1;
export const pageSize = 20;
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const URL = `https://mobile-tha-server.firebaseapp.com/walmartproducts/${pageNumber}/${pageSize}`;
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => {
    const getProductsPromise = axios.get(PROXY_URL+URL);
    return {
        type: GET_PRODUCTS,
        payload: getProductsPromise
    };
};
