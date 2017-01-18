import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'dd-app',
    template:
        `<h1>Hello</h1>`
    ,
    providers: [AuthService]
})

export class LoginComponent {
    username: String = '';
    password: String = '';

    constructor (private auth: AuthService){}
    login() {
        this.auth.login(this.username, this.password);
    }
}
