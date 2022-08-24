import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  classError:string ="";
  placeholderError:string = "";
  usernameError:boolean= false;
  passwordError:boolean = false;
  loginValidation:boolean = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log(new Date());
    this.classError ="voidInput";
    this.placeholderError = "void , ";
  }
  logIn(username:string,password:string){
    console.log("log in the value")
    this.resetAll();
    let name=username.trim();
    let pwd = password.trim();
    this.inputControl(name,pwd);
  }
  inputControl(nom:string,pssw:string){
    if(!nom){
      this.usernameError = true;
    }
    if(!pssw){
      this.passwordError = true;
    }
    if(!this.usernameError && !this.passwordError){
      this.loginValidation=true;
    }
    if(this.loginValidation){
      this.goToList();
    }
  }

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
  this.usernameError= false;
  this.passwordError= false;
  this.loginValidation= false;
  }
  goToList(){
    this.router.navigate(['/list']);
  }
  goToSignin(){
    this.router.navigate(['/signin']);
  }

}
