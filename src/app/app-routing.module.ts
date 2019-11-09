import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {EditblogComponent} from "./editblog/editblog.component";


const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'profile', component:ProfileComponent},
  {path:'profile/editBlog/:blogid', component:EditblogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
