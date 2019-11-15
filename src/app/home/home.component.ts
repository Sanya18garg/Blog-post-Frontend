import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date=new Date();
  title;body;result;posts;status="private";search;value;blogSearch;
  constructor(private service:HttpService,private router:Router,private blogservice:AppService) { }

  ngOnInit() {
    this.blogservice.getinfo1().subscribe(res=>{
      this.result=res;
      console.log(this.result);
    });

    this.blogservice.getposts().subscribe(res=>{
      this.posts=res;
      console.log(this.posts);
    });
  }
  logout()
  {
    sessionStorage.removeItem('token');
    this.service.isloggedin(false);
    this.router.navigate(['login'])


  }
  post(){
    alert("posted");
    const blog = {
      body:this.body,
      title: this.title,
      create_date: this.date,
      status:this.status
    };
    console.log(blog);
    this.blogservice.addblog(blog).subscribe(res=>{
      console.log('added to database');
      console.log(res);
    })
  }



  view(id){
    this.router.navigate(['blog/',id]);
  }

  unfollow(id){
    this.blogservice.unfollow(id).subscribe(res=>{
      this.router.navigate(['main']);
    });
  }
  searchUser(key){
    console.log(key);
    if(key){
      this.blogservice.search1(key).subscribe(res=>{
        this.search=res;
        console.log(res);

      })
    }
    else{
      this.search=[];
    }
  }

  searchblog(key){
    if(key){
      this.blogservice.searchblog(key).subscribe(res=>{
        this.posts=res;
        console.log(res);
      })
    }
    else{
      this.ngOnInit();
    }
  }

  userprofile(id){
    this.router.navigate(['people/',id]);
  }

}
