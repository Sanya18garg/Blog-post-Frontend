import { Component, OnInit } from '@angular/core';
import {posts} from "../post";
import {AppService} from "../app.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  result: any;
  alert: String;
  validate: Boolean;
  username; password;  email;



  //post1=new posts(1,"","", "","user");
  constructor(private service:AppService) {
    this.service.getinfo().subscribe(res => {
      this.result = res;
      console.log(this.result);
        });
  }
change(e) {
    for (let i = 0; i < this.result.length; i++) {
      if (this.result[i].username == e) {
        this.alert = "username already exist";
        this.validate = true;
        break;
      }
      else {
       this.alert = "";
        this.validate = false;
      }
    }
  }

  submit1(){
    alert("Successfully registered");
    const user = {
     active: 1,
      username: this.username,

role:"user",
      email: this.email,
      password: this.password,

followers:[],
      following:[],
      status:"private"

    };
    console.log(user);
    this.service.adduser(user);
  }

  ngOnInit() {
  }
  //onsubmit()
 // {
   // this.service.post1_user(this.post1).subscribe(
     // data=>console.log("SUCCESS",data),
      //error=>console.log("ERROR",error)

    //)
    //alert("Successfully created account:Press Login")
  //}


}
