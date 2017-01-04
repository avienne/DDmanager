import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
    selector: 'dd-app',
    template: '<h1> DD Web View </h1>',
    providers: [AuthService]
})
export class AppComponent implements OnInit{
    username: String = '';
    password: String = '';

    constructor (private auth: AuthService){}
    login() {
        this.auth.login(this.username, this.password);
    }
    // Will be removed Later
    ngOnInit(): void {
        console.log('On Init');
        this.username = 'Gorim';
        this.password = 'Gorim123456';
        this.login();
    }
    ///
}
