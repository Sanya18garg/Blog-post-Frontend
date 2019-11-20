import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {EditblogComponent} from "./editblog/editblog.component";
import {AddblogComponent} from "./addblog/addblog.component";
import {PeopleComponent} from "./people/people.component";


const routes: Routes = [
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile', component:ProfileComponent},
  {path:'profile/editBlog/:blogid', component:EditblogComponent},
  {path:'add',component:AddblogComponent},
  {path:'people/:id',component:PeopleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
