import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {posts} from './post';
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient,private router:Router) { }
  getinfo()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/api/getUsers",{headers});
  }
  post1_user(posts:posts)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.post<any>('http://localhost:8090/api/addUsers',posts,{headers: new HttpHeaders({'Content-Type':'application/json'})});
  }
  getinfo1()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/profile/get",{headers});
  }
  getmyblogs()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/myblogs/getBlogByCurrentUser",{headers});
  }


  getblog(id)
  {
    console.log(id);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/myblogs/getblogById/"+id,{headers});
  }

  editBlog(id,result)
  {

    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.put("http://localhost:8090/myblogs/update/"+id,result[0],{headers});
  }

  deleteblog(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/myblogs/deleteblog/"+id,{headers});
  }

addblog(json)
{
  const token=sessionStorage.getItem("token");
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.http.post<any>("http://localhost:8090/myblogs/addblog",json,{headers});
}
  adduser(user){
    console.log("user");
    return this.http.post("http://localhost:8090/api/addUsers",user).subscribe(res=>
      this.router.navigate(['login']));
  }
  follow(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/profile/follow/"+id,{headers});
  }
  getposts(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/profile/getblogsoffollowing",{headers});
  }

  unfollow(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/profile/unfollow/"+id,{headers});
  }


  getcomments(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/comments/getbyblog/"+id,{headers});
  }

  addcomment(id,data){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.post("http://localhost:8090/comments/addcomment/"+id,data,{headers});
  }

  deletecomment(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/comments/deletecomment/"+id,{headers});
  }
  remove(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/profile/deletefollowing/"+id,{headers});
  }

  getfollowers(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/myblogs/getfollowers",{headers});
  }

  getfollowing(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/myblogs/getfollowing",{headers});
  }



  search1(key){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/myblogs/search/"+key,{headers});
  }

  searchblog(key){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/profile/search/"+key,{headers});
  }

  getprofile(key){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/profile/get/"+key,{headers});
  }



}
