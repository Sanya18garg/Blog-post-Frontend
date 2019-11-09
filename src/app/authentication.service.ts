import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get('http://localhost:8090/api/validateUser',{headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('token',btoa(username+':'+password));
          return userData;
        }
      )

    );
  }
  logoutService()
  {
    sessionStorage.removeItem('token');
  }


}
