import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  tableStyle: string = "table table=sm";
  constructor(
    private usersvc: UserService
  ) { }

  //Called by angulars runtime. 
  //subscribe deals with the asynch
  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => {console.log (res); this.users = res as User[];},
      err => {console.error(err)}
    )
  };

}
