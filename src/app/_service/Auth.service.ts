import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { from } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseurl = 'http://localhost:5000/api/Auth/';
jwthelper = new JwtHelperService();
decode: any;
constructor(private httpclient: HttpClient) { }
// tslint:disable-next-line: typedef
Login(model: any)
{
  const header = new HttpHeaders();
  header.append('Content-type', 'application/json');


  return this.httpclient.post(this.baseurl + 'Login', model, {headers: header}).pipe(
    map((response: any) => {
      const user =  response;
      if(user)
      {
        localStorage.setItem('token', user.token);
        this.decode = this.jwthelper.decodeToken(user.token);
      }
    })
  );
}
// tslint:disable-next-line: typedef
Register(model: any)
{
  const header = new HttpHeaders();
  header.append('Content-type', 'application/json');
  return this.httpclient.post(this.baseurl + 'Register', model , {headers: header});
}
// tslint:disable-next-line: typedef
LoggedIn()
{
  const token = localStorage.getItem('token');
  return !this.jwthelper.isTokenExpired(token);
}
}
