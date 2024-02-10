import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/_service/Auth.service';
import { UserService } from 'src/app/_service/user.service';
import { User } from 'src/app/_model/User';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-memberedit',
  templateUrl: './memberedit.component.html',
  styleUrls: ['./memberedit.component.css']
})
export class MembereditComponent implements OnInit {
user: User;
@ViewChild('editform', {static: true}) editform: NgForm
  constructor(private auth: AuthService, private userservice: UserService, private route: Router, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getdata();
  }
  getdata()
  {
    this.userservice.GetUser(this.auth.decode.nameid).subscribe((users: User) => {
      this.user = users;
      console.log(this.user);
    }, error => {
      this.route.navigate(['/member']);
    });
  }
  updateuser(){
    this.userservice.updateuser(this.auth.decode.nameid, this.user).subscribe((next) => {
      this.alertify.success('Profile updated');
      this.editform.reset(this.user);
    }, errror => {
      console.log(errror);
    });
  }
}
