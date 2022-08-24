import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../utilisateurs/user-service.service';
import { Router } from '@angular/router';
import { USERS } from '../../@data/data';
import {User} from '../../@model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SigninComponent implements OnInit {
// variable d'erreur
  classError:string ="";
  placeholderError:string = "";
  usernameError : boolean = false;
  hisFunctionError : boolean = false;
  emailError : boolean = false;
  passwordError : boolean = false;
//bool de validation
  inputValidation : boolean = false;
// new user 
  utilisateur=new User();

// 
  userFonctions : string[];

  constructor(private router:Router , private userService : UserServiceService) { }

  ngOnInit(): void {
    this.classError ="voidInput";
    this.placeholderError = "void , ";
    this.userFonctions = this.userService.getAllFonction();
  }

// new ngForm incorporation
  onSubmit(f:NgForm){
    console.log(f.value);
    console.log(f.valid);
  }











  // gestion des message d'erreur

  addNewUser(name:string,laFunction:string,email:string,pass:string,verify:string){
    this.resetAll();
    let nom = name.trim();
    let mail = email.trim();
    let fonctionalite = laFunction.trim();
    let pwd = pass.trim();
    let pwdConf = verify.trim();

    if(this.inputValidation){
      this.utilisateur ={
        "id": 0,
        "name": nom,
        "email": mail,
        "picture": "urlPhoto",
        "password": pwd,
        "function": fonctionalite,
        "createDate": new Date()
      }
      USERS.push(this.utilisateur); 
      this.goToList();
    }
  }




  //render error 
  classDefault(error:boolean){
    if(error)
      return this.classError;
    else
      return ""
  }
  placeholderDefault(error:boolean,defaultPlaceholder:string){
    if(error){
      return this.placeholderError+defaultPlaceholder;
    }
    else
      return defaultPlaceholder;
  }

  resetAll(){
  this.usernameError = false;
  this.hisFunctionError = false;
  this.emailError = false;
  this.passwordError = false;
  this.inputValidation = false;
  }
  goToList(){
    this.router.navigate(['/list'])
  }
}
  

