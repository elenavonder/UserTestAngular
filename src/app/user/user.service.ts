import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.class';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:55052/api/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User [];

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<User[]>{
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

}
