import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../app.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpService} from "../http.service";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myprod; blogs;

  constructor(private router:Router,private route:ActivatedRoute,private service2:AppService,private http:HttpClient,private service:HttpService,private authservice:AuthenticationService) { }
  disabled=true;
  url='http://localhost:8090/profile/update';
  ngOnInit() {
    this.service2.getinfo1().subscribe(data=>{
      this.myprod=data;
    });
    this.service2.getmyblogs().subscribe(res=>{this.blogs=res; console.log(this.blogs);})

  }

  orders()
  {
    this.router.navigate(['/orderdetails']);
  }
  edit()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: 'Basic '+token});
    return this.http.put(this.url,this.myprod,{headers}).subscribe(data=>{
      console.log(data);
      //this.router.navigate(['/profile']);
    });
  }
  delete(id){
    this.service2.deleteblog(id).subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
    })
  }
}
