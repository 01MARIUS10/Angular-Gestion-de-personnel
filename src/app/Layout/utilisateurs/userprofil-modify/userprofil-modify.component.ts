import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { User } from 'src/app/@model/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userprofil-modify',
  templateUrl: './userprofil-modify.component.html',
  styleUrls: ['./userprofil-modify.component.scss']
})
export class UserprofilModifyComponent implements OnInit {
  users:User[];
  user:User;
  constructor(
    private currentRoute : ActivatedRoute ,
    private router : Router,
    private userService : UserServiceService) { }

  ngOnInit(): void {
    this.users = this.userService.getAllUser();
    const userId : string|null =this.currentRoute.snapshot.paramMap.get("id");
    if(userId)
      this.user = this.userService.getUserById(+userId) as User;
    else  
      this.user = this.users[0];
  }
  goToList(){
    this.router.navigate(['/list'])
  }
  addModification(){
    this.router.navigate(['/list'])
  }


}
