import { Component, OnInit } from '@angular/core';
import { Member } from './../../_models/member';
import { MemberService } from './../../_services/member.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  members: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.getMembers().subscribe(
      members => {
        this.members = members;
      }
    );
  }

}
