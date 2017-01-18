import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './components/app.component';
import { LoginComponent }  from './components/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(appRoutes),
      ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
