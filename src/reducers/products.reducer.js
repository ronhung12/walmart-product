import {GET_PRODUCTS} from "../actions/products.action";

export const productsReducer=(state = null, action)=>{
switch (action.type) {
    case GET_PRODUCTS:
        console.log(action.payload);
        return action.payload.data.products;

    default:
        return state;
    }

};
