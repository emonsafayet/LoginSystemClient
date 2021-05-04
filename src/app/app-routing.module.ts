import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { User} from '././user/user';
import {Registration } from './user/registration/registration';
import { from } from 'rxjs';
import { Login } from './user/login/login';


const routes: Routes =[
  {path:'',redirectTo:'/user/registration',pathMatch:'full'},
  { 
    path:'user',component:User,
    children:[
      { path:"registration",component:Registration, },
      { path:"login",component:Login, }
     
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
