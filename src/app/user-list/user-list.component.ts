import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  constructor(private usersService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    this.getAllUsers();
  

  }
  getAllUsers() {
    this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
      //console.log(this.users)
    })
  }

  updateUser(id: number)
  {
     this.router.navigate(['update-user',id]);
  }

  

  

}
