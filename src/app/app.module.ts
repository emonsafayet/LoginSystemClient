import { NgModule,Component  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component'; 
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule}from '@angular/platform-browser/animations'
// Components
import { Home } from "./home/home";
import { Login } from "./user/login/login";
import { Registration } from "././User/registration/registration";
import { User } from "./user/user"; 

// Services
 import { UserService } from "./shared/user.service";
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent
  , User, Registration, Login, Home],
  imports: [
    ToastrModule.forRoot({progressBar:true}),BrowserAnimationsModule,BrowserModule, RouterModule ,AppRoutingModule, ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
