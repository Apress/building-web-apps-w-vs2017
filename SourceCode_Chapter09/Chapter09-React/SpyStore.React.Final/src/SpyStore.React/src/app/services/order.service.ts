import * as $ from "jquery";
import { BaseService } from "./baseService";
import { Order } from "../models/order";

export class OrderService extends BaseService{

    getOrders(): JQueryPromise<Order[]> {
        return $.getJSON(this.getRootUrl() + "/orders");
    }

    getOrder(id: number): JQueryPromise<Order> {
        return $.getJSON(this.getRootUrl() + "/orders/" + id);
    }
}
