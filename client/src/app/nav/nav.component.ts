import { Component, OnInit } from '@angular/core';
import { AccountService } from './../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  isLogedIn: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    //console.log(this.model);
    
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.isLogedIn = true;
    }, error => {
      console.log(error);
    });
  }

}
