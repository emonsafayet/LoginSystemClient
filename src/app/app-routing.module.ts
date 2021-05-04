import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { User} from '././user/user';
import {Registration } from './user/registration/registration';
import { from } from 'rxjs';
import { Login } from './user/login/login';
import { Home } from './home/home';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes =[
  {path:'',redirectTo:'/user/Login',pathMatch:'full'},
  { 
    path:'user',component:User,
    children:[
      { path:"registration",component:Registration, },
      { path:"login",component:Login, }
     
    ]
  },
  {path:'home',component:Home,canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
