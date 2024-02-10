import { Component } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { AuthService } from './_service/Auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFrontend';
  jwthelper = new JwtHelperService();
  constructor(private authservice: AuthService){}
  ngOnInit()
  {
    const token = localStorage.getItem('token');
    if(token)
    this.authservice.decode=this.jwthelper.decodeToken(token);
  }
}
