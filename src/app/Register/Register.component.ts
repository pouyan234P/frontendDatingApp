import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/Auth.service';
import { ConcatSource } from 'webpack-sources';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
  constructor(private auth: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
// tslint:disable-next-line: typedef
Register()
{
  this.auth.Register(this.model).subscribe(
    (next) =>
    {
      console.log('successful register');
    }, (error) =>
    {
      console.log(error);
    }
  )
}
}
