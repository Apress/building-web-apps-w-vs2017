import * as React from "react";
import * as ReactDOM from "react-dom";
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { App } from "./components/app";
import { Products } from './components/products';
import { OrderDetail } from './components/orderDetail';
import { Cart } from './components/cart';
import { Login } from './components/login';
import { ProductDetail } from './components/productDetail';
import { CheckOut } from './components/checkOut';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Products}/>
            <Route path="/products(/:id)" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/login" component={Login} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/orderdetail" component={OrderDetail} />
        </Route>
    </Router>
), document.getElementById('app'));
