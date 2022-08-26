import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { responseTab , responseVal } from 'src/app/@model/response';
import {User} from '../../../@model/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  Users:User[] ;
  
  constructor(
    private router : Router,
    private userService : UserServiceService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(users => {
      this.Users = users as User[];
      console.log(this.Users)
    });
  }

  delete(user:User){
    this.Users.splice(this.Users.indexOf(user),1);
    console.log(this.Users)
  }
  goToProfil(user:User){
    this.router.navigate(['/list/',user.id])
  }
  goModifyProfil(user : User){
    this.router.navigate(['/list/',user.id,'modify'])
  }
}
