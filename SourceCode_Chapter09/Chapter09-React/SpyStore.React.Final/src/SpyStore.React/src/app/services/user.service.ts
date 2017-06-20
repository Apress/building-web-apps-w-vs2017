import * as $ from "jquery";
import { BaseService } from "./baseService";
import { Customer } from "../models/customer";

export class UserService extends BaseService{

    getUsers(): JQueryPromise<Customer[]> {
        return $.getJSON(this.getRootUrl() + "/customer");
    }
}
