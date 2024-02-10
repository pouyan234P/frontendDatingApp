import { Component, OnInit } from '@angular/core';
import { User } from '../../_model/User';
import { UserService } from '../../_service/user.service';
import { AlertifyService } from '../../_service/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
users: User[];
  constructor(private userservice: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers()
  {
    this.userservice.GetAllUser().subscribe(
    (users: User[]) =>
    {
      this.users = users;
    }, (error) =>
    {
      this.alertify.error(error);
      console.log(error);
    }
    )
   
  }
}
