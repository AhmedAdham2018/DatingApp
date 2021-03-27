import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Member } from '../_models/member';

const httpsOptions = {
  headers: new HttpHeaders(
    {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user') || '{}').token
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'users' , httpsOptions);
  }

  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'users/' + username , httpsOptions);
  }
}
