import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_model/User';

@Component({
  selector: 'app-membercard',
  templateUrl: './membercard.component.html',
  styleUrls: ['./membercard.component.css']
})
export class MembercardComponent implements OnInit {
@Input() users: User;
  constructor() { }

  ngOnInit() {
  }

}
