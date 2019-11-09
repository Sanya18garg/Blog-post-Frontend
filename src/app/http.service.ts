import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  isloggedin(bool:boolean)
  {
    sessionStorage.setItem('auth',String(bool));
    return bool;
  }
  checklogin()
  {
    const auth=sessionStorage.getItem('auth');
    //if(auth)
    //{
    //return true;
    //}
    //else{
    //return false;
    //}
    return JSON.parse(auth);
  }
}
