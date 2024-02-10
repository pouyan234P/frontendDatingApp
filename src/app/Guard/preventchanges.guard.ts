import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { MembereditComponent } from '../member/memberedit/memberedit.component';

@Injectable()

export class preventchanges implements CanDeactivate<MembereditComponent>
{
    // tslint:disable-next-line: typedef
    canDeactivate(component: MembereditComponent){
        if (component.editform.dirty)
        {
            return confirm('Are you sure you want to continue? Any unsave changes will be lost');
        }
        return true;
    }
    
}