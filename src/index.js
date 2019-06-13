import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import ReduxPromise from 'redux-promise';
import {applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./reducers/root.reducer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Products from "./containers/Products";
import ProductDetails from "./containers/ProductDetails";



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/products" component={Products}/>
                        <Route path="/product/:productId" component={ProductDetails}/>
                    </Switch>
                </App>
            </BrowserRouter>
    </Provider>,

    document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
