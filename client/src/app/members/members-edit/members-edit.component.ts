import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { AccountService } from './../../_services/account.service';
import { MemberService } from './../../_services/member.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Member } from './../../_models/member';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-members-edit',
  templateUrl: './members-edit.component.html',
  styleUrls: ['./members-edit.component.css']
})
export class MembersEditComponent implements OnInit {

  @ViewChild('editForm') editForm: NgForm;
  member: Member;
  user: User;

  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any){
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private accountService: AccountService,
     private memberService: MemberService,
     private toastr: ToastrService) {
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

  updateMember(){
    console.log(this.member);
    this.toastr.success("Profile has been updated successfully.");
    this.editForm.reset(this.member);
  }

}
