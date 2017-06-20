import * as React from "react";
import {Link} from "react-router";

export class CartRecord extends React.Component<any, any> {

    componentWillMount() {
        this.setState({quantity: -1, item: {}});
    }

    componentDidMount() {
        this.setState({quantity: this.props.item.Quantity, item: this.props.item});
    }

    quantityUpdated(event) {

        var quantity: number = Number(event.target.value);

        if (quantity > this.state.item.UnitsInStock) {
            quantity = this.state.item.UnitsInStock;
        }
        else if (quantity < 1) {
            quantity = 1;
        }
        this.state.item.Quantity = quantity;

        this.setState({quantity: quantity, item: this.state.item});

    }

    updateQuantity() {

        if (this.props.updateQuantity) {
            this.props.updateQuantity(this.state.item);
        }
    }

    removeRow() {
        if (this.props.onRowDeleted) {
            this.props.onRowDeleted(this.state.item);
        }
    }

    render() {
        return <tr>
            <td>
                <div className="product-cell-detail">
                    <img src="images/product-thumb.png" className="pull-left"/>
                    <Link to={'/product/' + this.props.item.ProductId }
                          className="h5">{ this.props.item.ModelName }</Link>
                    <div className="small text-muted hidden-xs">{ this.props.item.Description }</div>
                </div>
            </td>
            <td className="text-right">${ this.props.item.CurrentPrice.toFixed(2) }</td>
            <td className="text-right cart-quantity-row">
                <input type="number" className="cart-quantity" value={ this.state.quantity }
                       onChange={ (e) => this.quantityUpdated(e) }/>
                <button className="btn btn-link btn-sm" onClick={ () => this.updateQuantity() }>Update</button>
                <button className="btn btn-link btn-sm" onClick={ () => this.removeRow() }>Remove</button>
            </td>
            <td className="text-right">{ this.props.item.UnitsInStock }</td>
            <td className="text-right">${ this.props.item.LineItemTotal.toFixed(2) }</td>
        </tr>
    }
}