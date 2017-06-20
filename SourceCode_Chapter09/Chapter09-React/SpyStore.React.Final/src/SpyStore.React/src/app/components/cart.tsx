import * as React from "react";
import {Link} from "react-router";
import {CartService} from "../services/cart.service";
import {LoggingService} from "../services/logging.service";
import {UserService} from "../services/user.service";
import {ShoppingCartRecord} from "../models/shoppingCartRecord";
import {CartRecord} from "./cartRecord";

export class Cart extends React.Component<any, any> {

    componentWillMount() {
        this.setState({total: 0, items: {}, user: {}});
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        var userService = new UserService();
        var loggingService = new LoggingService();

        userService.getUsers().then((data) => {
            if (data && data.length > 0) {
                this.setState({total: this.calculateTotal(this.state.items), items: this.state.items, user: data[0]});

                this.loadCart();
            }
        }).fail((err) => {
            loggingService.logError(err);
        });
    }

    loadCart() {
        var _service = new CartService();
        var _loggingService = new LoggingService();

        if (this.state.user) {
            _service.getCart(this.state.user.Id).then((data) => {
                if (data) {
                    data.forEach(item => item.OriginalQuantity = item.Quantity);

                    this.setState({total: this.calculateTotal(data), items: data, user: this.state.user});

                }
            }).fail((err) => {
                _loggingService.logError(err);
            });
        }
    }


    calculateTotal(items: ShoppingCartRecord[] | undefined): number {

        var total = 0;

        if (items && items.length > 0) {
            items.forEach((row: ShoppingCartRecord) => {
                total += row.LineItemTotal;
            });
        }

        return total;
    }

    rowDeleted(row: ShoppingCartRecord) {

        var _service = new CartService();
        var _loggingService = new LoggingService();

        if (this.state.user != null) {

            _service.removeCartRecord(this.state.user.Id, row).then((data) => {
                this.loadCart();
            }).fail((err) => {
                if (err.responseJSON.Error) {
                    alert(err.responseJSON.Error);
                }

                _loggingService.logError(err);
            });
        }
    }

    updateQuantity(row: ShoppingCartRecord) {
        var _service = new CartService();
        var _loggingService = new LoggingService();

        if (this.state.user != null && row.Quantity != row.OriginalQuantity) {

            _service.updateCartRecord(this.state.user.Id, row).then((data) => {
                this.loadCart();

            }).fail((err) => {
                if (err.responseJSON.Error) {
                    alert(err.responseJSON.Error);
                }

                _loggingService.logError(err);

            });
        }
    }

    columnStyle = {
        width: '70%'
    };

    render() {

        var cartRows: any[] = [];
        var records: ShoppingCartRecord[] = this.state.items;

        if (records && records.length > 0) {
            cartRows = records.map((record: ShoppingCartRecord) => {
                var rowKey = record.ProductId + "." + record.Quantity;

                return <CartRecord key={ rowKey  } item={ record } onRowDeleted={ (record) => this.rowDeleted(record) }
                                   updateQuantity={ (record) => this.updateQuantity(record) }/>;
            });
        }

        return <div>
            <h3>Cart</h3>

            <div className="table-responsive">
                <table className="table table-bordered product-table">
                    <thead>
                    <tr>
                        <th style={ this.columnStyle }>Product</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Quantity</th>
                        <th className="text-right">Available</th>
                        <th className="text-right">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    { cartRows }
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>${ this.state.total.toFixed(2) }</th>
                    </tr>
                    </tfoot>
                </table>
            </div>

            <div className="pull-right">
                <Link to="checkout">
                    <button className="btn btn-primary">Checkout</button>
                </Link>
            </div>
        </div>
    }
}