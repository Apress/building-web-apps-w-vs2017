import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable, Observer} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

export interface User {
    Id?: number;
    FullName?: string;
    EmailAddress?: string;
}

@Injectable()
export class UserService {
    private _user: User = { Id: 0 };

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get("http://localhost:40001/api/customer").map(response =>
            (<User[]>response.json()));
    }

    ensureAuthenticated(): Observable<User> {
        var observable = new Observable((subscriber) => {
            if (this.IsAuthenticated) {
                subscriber.next(this.User);
            } else {
                // for Demo purposes take first user
                return this.http.get("http://localhost:40001/api/customer").map(response => <User[]>response.json()).subscribe(users => {
                    this.User = users[0];
                    subscriber.next(this.User);
                });
            }
        });

        return observable;
    }

    logout() {
        this.User = { Id: 0, FullName: "", EmailAddress: "" };
    }

    set User(user: User) {
        //this._user = user;
        if (user) {
            this._user.Id = user.Id;
            this._user.FullName = user.FullName;
            this._user.EmailAddress = user.EmailAddress;
        }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    
    get User(): User {
        return this._user;
    }

    get IsAuthenticated(): Boolean {
        return this._user.Id > 0;
    }
}
