import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/User';
import { UserService } from 'src/app/_service/user.service';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { delay } from 'rxjs/operators';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-memberDetial',
  templateUrl: './memberDetial.component.html',
  styleUrls: ['./memberDetial.component.css']
})
export class MemberDetialComponent implements OnInit {
// tslint:disable-next-line: max-line-length
user: User;
//user = {} as User;

id: number;
  constructor(private userservice: UserService, private alertify: AlertifyService, private route: ActivatedRoute, private router: Router) {
   }

   // tslint:disable-next-line: typedef
   async ngOnInit() {
    /*this.route.params.subscribe(
      (parms: Params) => {
        // tslint:disable-next-line: no-string-literal
        this.id = +parms['id'];
      }
    );*/
    this.loaduser();
  }
  // tslint:disable-next-line: typedef
  loaduser() {
  this.userservice.GetUser(+this.route.snapshot.params['id']).subscribe(
    (users: User) =>
    {
      this.user = users;
    }, error =>
    {
      this.router.navigate(['./member']);
      console.log(error);
    });
 }
}

