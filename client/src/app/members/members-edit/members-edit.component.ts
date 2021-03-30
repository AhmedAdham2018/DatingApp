import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AccountService } from './../../_services/account.service';
import { MemberService } from './../../_services/member.service';

@Component({
  selector: 'app-members-edit',
  templateUrl: './members-edit.component.html',
  styleUrls: ['./members-edit.component.css']
})
export class MembersEditComponent implements OnInit {

  member: any;
  user: any;

  constructor(private accountService: AccountService, private memberService: MemberService) {
    accountService.currentUser$.pipe(take(1)).subscribe(
      user => this.user = user
    );
  }

  ngOnInit(): void {
    this.loadMember()
  }

  loadMember(){
    this.memberService.getMember(this.user.username).subscribe(
      member => this.member = member
    )
  }

}
