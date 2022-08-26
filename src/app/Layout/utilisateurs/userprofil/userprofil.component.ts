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
    this.userService.getAllUser().subscribe(users => this.Users = users as User[]);
    this.userId = this.currentRoute.snapshot.paramMap.get("id") as string
    if(this.userId)
      // this.User= this.userService.getUserById(+this.userId) as User;
      this.userService.getUserById(+this.userId).subscribe(user => {
                                                                    this.User = user as User; 
                                                                    console.log(user)
                                                                  });
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
