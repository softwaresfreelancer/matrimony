import { IUserInfo } from "../dataTypes/userInfo";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserInfoService {
    private param : string;
    private url = '/assets/userInfo-data.json';

    constructor(private _http: HttpClient) {
    }

    getUserInfo(user): Observable<IUserInfo> {
        this.param = user as string;
        return this._http.get<IUserInfo>(this.url)
            .do(data => console.log('All:' + "UserInfo data"))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}