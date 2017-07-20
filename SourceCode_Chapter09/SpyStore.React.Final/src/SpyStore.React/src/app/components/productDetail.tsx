import * as React from "react";
import { hashHistory } from "react-router";
import { ProductService } from "../services/product.service";
import { CartService } from "../services/cart.service";
import { UserService } from "../services/user.service";
import { Link } from "react-router";

export class ProductDetail extends React.Component<any, any> {

    constructor() {
        super();
        this.addToCart = this.addToCart.bind(this);
    }
    componentWillMount() {
        this.setState({ product: {}, quantity: 1, user: {}});
    }

    componentDidMount() {
        var service = new ProductService();

        this.loadUser();

        service.getProduct(this.props.params.id).then((data) => {
            this.setState({ quantity: 1, product: data, user: this.state.user});
        });
    }

    loadUser() {
        var userService = new UserService();

        userService.getUsers().then((data) => {
            if (data && data.length>0)
            {
                this.setState({ quantity: this.state.quantity, product: this.state.product, user: data[0]});
            }
        });
    }

    quantityUpdated(event) {
        this.setState({quantity: event.target.value > 0 ? event.target.value : 0 , product: this.state.product, user: this.state.user});
        event.preventDefault();
    }

    addToCart() {
        var cartService = new CartService();

        if (this.state.user && this.state.quantity>0) {
            cartService.addToCart(this.state.user.Id, this.state.product.Id, this.state.quantity).then((data) => {
                hashHistory.push("/cart");
            }).fail((err) => {
                if (err.responseJSON.Error)
                {
                    alert(err.responseJSON.Error);
                }
            })
        }
    }

    render() {
        return (<span>
            <h1 className="visible-xs">{ this.state.product.ModelName }</h1>
            <div className="row product-details-container">
                <div className="col-sm-6 product-images">
                    <img src={'/images/' + this.state.product.ProductImageLarge }/>
                    <div className="key-label">PRODUCT IMAGES</div>
                </div>

                <div className="col-sm-6">
                    <h1 className="hidden-xs">{ this.state.product.ModelName }</h1>
                    <div className="price-label">PRICE:</div>
                    <div className="price">${ this.state.product.CurrentPrice  }</div>
                    <div className="units">Only { this.state.product.UnitsInStock} left.</div>
                    <div className="product-description">{ this.state.product.Description }</div>


                <ul className="product-details">
                    <li>
                        <div className="key-label">MODEL NUMBER:</div>
                        { this.state.product.ModelNumber}
                    </li>
                    <li>
                        <div className="key-label">CATEGORY:</div>
                        <Link
                            to={'products/' + this.state.product.CategoryId }>{ this.state.product.CategoryName}</Link>
                    </li>
                </ul>

                <div className="row cart-group">
                    <label>QUANTITY:</label>
                    <input type="number" name="qty" value={this.state.quantity} onChange={(e) => this.quantityUpdated(e)} className="cart-quantity form-control"/>
                    <button className="btn btn-primary" onClick={this.addToCart}>Add to Cart</button>
                </div>

                <Link to="products">Back to List</Link>
            </div>
            </div>
        </span>)
    }
}