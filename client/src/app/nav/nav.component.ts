import { Component, OnInit } from '@angular/core';
import { AccountService } from './../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  isLoggedIn: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    //console.log(this.model);

    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.isLoggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  logout(){
    this.isLoggedIn = false;
  }

}
