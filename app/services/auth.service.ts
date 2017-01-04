import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    private loginUrl = 'http://127.0.0.1:8000/api-auth/login/';
    private token = '';
    constructor (private http: Http){}
    login(login: String, pwd: String){
        return this.http.post(this.loginUrl, {username: login, password: pwd})
        .toPromise()
        .then((response: any) => this.token = response.token)
        .catch((error: any) => {
            console.log('an error occured');
        })
    }
}
