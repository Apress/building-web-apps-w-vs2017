import * as React from "react";
import { ProductService } from "../services/product.service";
import { Link } from "react-router";

export class Products extends React.Component<any, any> {

    componentWillMount() {
        this.setState({ header: "", products: [] });
    }

    componentDidMount() {
        this.refreshProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.params.id != prevProps.params.id) {
            this.refreshProducts();
        }
    }

    categoryID: number | null = null;

    refreshProducts() {
        if (!this.props.params.id) {
            this.loadFeaturedProducts();
        }
        else if (this.props.params.id != this.categoryID) {
            this.categoryID = this.props.params.id;
            this.loadCategoryProducts(this.props.params.id);

        }
    }

    updateCategoryName() {
        if (this.categoryID != null) {
            var service = new ProductService();

            service.getCategory(this.categoryID).then((data) => {
                if (data && data.CategoryName) {
                    this.setState({ header: data.CategoryName, products: this.state.products});
                }
            });
        }
    }

    loadFeaturedProducts() {
        var service = new ProductService();
        this.categoryID = null;
        service.getFeaturedProducts().then((data) => {
            this.setState({ header: "Featured Products", products: data});
        });
    }

    loadCategoryProducts(categoryId: string) {
        var service = new ProductService();

        service.getProductsForACategory(categoryId).then((data) => {
            this.setState({ header: "Category", products: data });
            this.updateCategoryName();
        });
    }

    searchProducts(searchText: string) {
        var _service = new ProductService();

        _service.searchProducts(searchText).then((data) => {
            this.setState({ header: "Search Results", products: data});
        });
    }

    render() {
        var products = this.state.products.map((product) => {
            var imageUrl = '/images/' + product.ProductImage;
            var isCurrentCategory = this.categoryID == product.categoryID;

            return (<div key={product.Id} className="col-xs-6 col-sm-4 col-md-3">
                <div className="product">
                    <img src={imageUrl} />
                    <div className="price">${ product.CurrentPrice.toFixed(2) }</div>
                    <div className="title-container">
                        <h5>{ product.ModelName }</h5>
                    </div>
                    <div className="model-number"><span className="text-muted">Model Number:</span>  {product.ModelNumber }</div>
                    {(isCurrentCategory) ? (
                        <Link to={ 'products/' + product.CategoryId } className="category">{ product.CategoryName }</Link> ) :
                        ( <div className="category">{ product.CategoryName }</div> )}
                    <Link to={ 'product/' + product.Id } className="btn btn-primary btn-cart"><span className="glyphicon glyphicon-shopping-cart"></span> Add to Cart</Link>
                </div>
            </div>)
        });

        return <div>
            <div className="jumbotron">
                <Link to="products" className="btn btn-info btn-lg" dangerouslySetInnerHTML={{ __html: "View Tech Deals &raquo;" }}></Link>
            </div>

            <h3>{ this.state.header }</h3>

            <div className="row">
                { products }
            </div>
        </div>
    }
}