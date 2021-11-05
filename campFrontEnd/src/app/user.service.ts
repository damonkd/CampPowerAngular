import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserNew } from './user-new';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private addUserURL = 'http://localhost:8080/api/auth/signup';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addUser(user: UserNew): Observable<UserNew> {
    return this.http.post<UserNew>(this.addUserURL, user, this.httpOptions)

}
}
