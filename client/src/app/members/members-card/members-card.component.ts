import { Component, Input, OnInit } from '@angular/core';
import { Member } from './../../_models/member';

@Component({
  selector: 'app-members-card',
  templateUrl: './members-card.component.html',
  styleUrls: ['./members-card.component.css']
})
export class MembersCardComponent implements OnInit {

  @Input() member: any;

  constructor() { }

  ngOnInit(): void {
  }

}
