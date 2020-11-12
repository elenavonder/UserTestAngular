import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void{
    console.log(this.user);
    this.usersvc.change(this.user).subscribe(
      res=> {console.debug("user change:", res);
      this.router.navigateByUrl("/users/list")},
      err=>{console.error("error changing user:", err)}
    );
  }

  ngOnInit(): void {
    //without +, it will return string
    let id = +this.route.snapshot.params.id;
    this.usersvc.getPK(id).subscribe(
      res=>{console.debug("User:", res); this.user = res;},
      err=>{console.error(err)}
    );
  }

}
