import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:HttpService,private router:Router) { }

  ngOnInit() {
  }
  logout()
  {
    sessionStorage.removeItem('token');
    this.service.isloggedin(false);
    this.router.navigate(['login'])


  }

}
