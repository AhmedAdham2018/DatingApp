import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountService: AccountService , private toast: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model)
    .subscribe((user) => {
      //console.log(user);
      this.cancel();
    }, error => {
      this.toast.error(error.error);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

  

}
