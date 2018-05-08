import { IUser } from "../dataTypes/user";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {
private url='/assets/users-data.json';

constructor(private _http:HttpClient) {
}

    getUsers():Observable<IUser[]> {
            return this._http.get<IUser[]>(this.url)
            .do(data=>console.log('All:'+"user ids"))
            .catch(this.handleError);
    }   

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}