import * as React from "react";
import { Category } from "../models/category";
import { Link } from "react-router";

export class CategoryLinks extends React.Component<any, undefined> {


    render() {
        var categories: Category[] = this.props.categories;

        var links = categories.map((category,index) => {
            var url = "products/" + category.Id;

            return (<li key={ index }>
                <Link to={ "products/" + category.Id }>{ category.CategoryName }</Link>
            </li>)

        });

        return (<ul className="nav nav-pills hidden-sm">
                    { links }
                </ul>)
    }
}