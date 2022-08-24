import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { User } from 'src/app/@model/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userprofil',
  templateUrl: './userprofil.component.html',
  styleUrls: ['./userprofil.component.scss']
})
export class UserprofilComponent implements OnInit {
  Users:User[];
  User:User;
  userId:string;
  constructor(
    private currentRoute: ActivatedRoute ,
    private router : Router,
    private userService : UserServiceService
    ) { }

  ngOnInit(): void {
    this.Users = this.userService.getAllUser()
    this.userId = this.currentRoute.snapshot.paramMap.get("id") as string
    if(this.userId)
      this.User= this.userService.getUserById(+this.userId) as User;
    else
      this.User=this.Users[0]
  }
  goToList(){
    this.router.navigate(['/list']);
  }
  goModifyThatProfil(){
    this.router.navigate(['/list',this.userId,'modify'])
  }
  deleteThatProfil(){
    this.router.navigate(['/list']);
  }
}
