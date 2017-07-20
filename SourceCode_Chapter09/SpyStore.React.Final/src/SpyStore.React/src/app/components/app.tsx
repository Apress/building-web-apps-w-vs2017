import * as React from "react";
import { Link } from 'react-router'
import { Category } from "../models/category";
import { ProductService } from "../services/product.service";
import { CategoryLinks } from "./categoryLinks";

export class App extends React.Component<any, any> {

    componentWillMount() {
        this.setState({ categories: [] });

    }

    componentDidMount() {

        this.loadCategories();
    }

    loadCategories()
    {
        var _service = new ProductService();

        _service.getCategories().then((data) => {
            var categories: Category[] = data || [];

            this.setState({ categories: categories });
        });
    }

    render() {
        return (
            <div>
                <header className="navbar navbar-default navbar-static-top">
                    <div className="container">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".header-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand visible-xs">SPY STORE</a>
                        </div>

                        <nav className="collapse navbar-collapse header-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <Link to="categoryLinks" className="dropdown-toggle hidden-md hidden-lg" data-toggle="dropdown">CATEGORIES <span className="caret"></span></Link>
                                    <CategoryLinks categories= { this.state.categories } />
                                </li>
                                <li><Link to="cart" ><span className="glyphicon glyphicon-shopping-cart"></span> CART</Link></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-search"></span> SEARCH</a>
                                    <div className="dropdown-menu search-dropdown-menu">
                                        <div className="input-group">
                                            <label className="sr-only">Search</label>
                                            <input type="text" id="searchString" name="searchString" className="form-control" placeholder="SEARCH"></input>
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
                                                </span>
                
                                        </div>
                                    </div>
                                </li>
                            </ul >
                        </nav >
                    </div >
                </header >
                <div className="page container">
                    <div className="panel panel-default">
                        <nav className="panel-heading hidden-xs">
                            <div className="store-logo">
                                <a ><img src="/images/store-logo.png" alt="Spy Store" /></a>
                            </div>

                            <CategoryLinks categories= { this.state.categories } />

                        </nav>
                        <div className="panel-body">
                               {this.props.children}
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <a href="http://github.com"><img src="/images/octocat.png" className="social-icon" /> GitHub</a>
                        <small className="text-muted">&copy; 2017 - SpyStore.React PBB Productions</small>
                    </div>
                </footer>
            </div >
        )
    }
}
