import { Component, OnInit } from '@angular/core';
import {posts} from "../post";
import {AppService} from "../app.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  post1=new posts(1,"","", "","user");
  constructor(private service:AppService) { }

  ngOnInit() {
  }
  onsubmit()
  {
    this.service.post1_user(this.post1).subscribe(
      data=>console.log("SUCCESS",data),
      error=>console.log("ERROR",error)

    )
    alert("Successfully created account:Press Login")
  }


}
