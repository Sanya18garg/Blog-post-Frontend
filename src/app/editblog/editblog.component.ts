import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {
  id;blogs;title;body;
  constructor(private route :ActivatedRoute,private httpservice:AppService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id=params.get('blogid');
    });

    this.httpservice.getblog(this.id).subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
    });
  }
  edit(){
    this.httpservice.editBlog(this.id,this.blogs).subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
      alert("profile updated");
    });
  }

}
