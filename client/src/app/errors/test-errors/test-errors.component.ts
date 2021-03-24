import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  validationErrors : string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get400ValidationErorr(){
    this.http.post(this.baseUrl + 'account/register' , {}).subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
        this.validationErrors = error;
      }
    );
  }

  get400Error(){
    this.http.get(this.baseUrl + 'errors/bad-request').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    );
  }

  get401Error(){
    this.http.get(this.baseUrl + 'errors/auth').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    );
  }

  get404Error(){
    this.http.get(this.baseUrl + 'errors/not-found').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    );
  }

  get500Error(){
    this.http.get(this.baseUrl + 'errors/server-error').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    );
  }

}
