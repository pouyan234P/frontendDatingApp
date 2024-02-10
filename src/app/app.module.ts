import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './_service/Auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Register/Register.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MessageComponent } from './message/message.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AlertifyService } from './_service/alertify.service';
import { UserService } from './_service/user.service';
import { MembercardComponent } from './member/membercard/membercard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetialComponent } from './member/memberDetial/memberDetial.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { MembereditComponent } from './member/memberedit/memberedit.component';
import { preventchanges } from './Guard/preventchanges.guard';

// tslint:disable-next-line: typedef
export function tokengetter()
{
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      MessageComponent,
      ListComponent,
      MembercardComponent,
      MemberDetialComponent,
      MembereditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokengetter,
        allowedDomains: ['localhost:5000']
      }
    }),

  ],
  providers: [
    AuthService,
    AlertifyService,
    UserService,
    preventchanges
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
