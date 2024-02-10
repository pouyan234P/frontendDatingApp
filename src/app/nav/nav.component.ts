import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/Auth.service';
import { AlertifyService } from '../_service/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};
  constructor(public authservice: AuthService, private alertiyfy: AlertifyService, private route: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  // tslint:disable-next-line: typedef
  login()
  {
    this.authservice.Login(this.model).subscribe(
      (next) =>
      {
        this.alertiyfy.success('you have successfull logged in');
      }, 
      (error) =>
      {
        this.alertiyfy.error(error);
      },
      () =>
      {
        this.route.navigate(['/member']);
      }
    );
  }
  // tslint:disable-next-line: typedef
  Loggedin()
  {
  return this.authservice.LoggedIn();
  }
  // tslint:disable-next-line: typedef
  Loogedout()
  {
   localStorage.removeItem('token');
   this.route.navigate(['/home'])
  }
}
