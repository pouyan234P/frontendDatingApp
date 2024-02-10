import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_service/Auth.service';
import { AlertifyService } from '../_service/alertify.service';

@Injectable({
  providedIn: 'root'
})
//ng generate guard auth
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private alertify: AlertifyService, private route: Router){}
  canActivate(): boolean  {
   if(this.auth.LoggedIn()) {
   return true;
   }
   this.alertify.error('you shall not pass');
   this.route.navigate(['/home']);
   return false;
  }
  
}
