import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MessageComponent } from './message/message.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './Guard/auth.guard';
import { MemberDetialComponent } from './member/memberDetial/memberDetial.component';
import { Component } from '@angular/core';
import { MembereditComponent } from './member/memberedit/memberedit.component';
import { preventchanges } from './Guard/preventchanges.guard';
export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'member', component: MemberListComponent},
            {path: 'member/:id', component: MemberDetialComponent},
            {path: 'edit', component: MembereditComponent, canDeactivate: [preventchanges]},
            {path: 'message', component: MessageComponent},
            {path: 'list', component: ListComponent}
        ]
    },
    {path: '**', component: HomeComponent},
]

