import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_model/User';
import {map} from 'rxjs/operators';
import { $ } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class UserService {
baseurl = 'http://localhost:5000/api/Users';
constructor(private httpclient: HttpClient) { }

GetAllUser(): Observable<User[]>
{
  const header = new HttpHeaders();
  header.append('content-type', 'application/json');
  return this.httpclient.get<User[]>(this.baseurl  , {headers: header});
}
GetUser(id: any): Observable<User>
{
  const header = new HttpHeaders();
  header.append('content-type', 'application/json');
  return this.httpclient.get<User>(this.baseurl + '/' + id, {headers: header});
}
updateuser(id: number, user: User)
{
  const header = new HttpHeaders();
  header.append('content-type', 'application/json');
  return this.httpclient.put(this.baseurl + '/' + id, user, {headers: header});
}
}
