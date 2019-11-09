import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../http.service";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username;
password;
  constructor(private router:Router,private service:HttpService,private route:ActivatedRoute,private authservice:AuthenticationService) { }

  ngOnInit() {
    if(this.service.checklogin())
    {
      this.router.navigate(['home']);
    }

  }
  login()
  {
    console.log(this.username);
    console.log(this.password);
    this.authservice.authenticate(this.username,this.password).subscribe(data=>{this.service.isloggedin(true);this.router.navigate(['home']);});


  }
  logout()
  {
    this.service.isloggedin(false);
  }
}
