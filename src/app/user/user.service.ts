import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.class';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:55052/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<User[]>{
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  getPK(id: number): Observable<User>{
    return this.http.get(`${baseurl}/${id}`) as Observable<User>;
  }
}
