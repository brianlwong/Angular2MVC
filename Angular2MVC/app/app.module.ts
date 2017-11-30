import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { HomeComponent } from './components/home.component';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';

import { UserService } from './service/user.service';

@NgModule({
    //add your modules here
    imports: [ BrowserModule, ReactiveFormsModule, HttpModule, routing ],
    //add your components here
    declarations: [ AppComponent, HomeComponent, UserComponent ],
    //add your services here
    providers: [ UserService, { provide: APP_BASE_HREF, useValue: '/' } ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }