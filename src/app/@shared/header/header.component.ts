import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  horloge:Date = new Date();
  timeSession : number =0;
  stringRebour:string ="";
  hide:boolean=false;
  
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.startHorloge();
    this.startSession(1000);

    
  }
  ngDoCheck():void{
    if(this.timeSession===0){
      alert("session epuiser")
      console.log("ok");
      this.router.navigate(['/login'])
    }
  }
  ngDestroy():void{
    alert("bye")
  }

  showInput(){
    this.hide=!this.hide
    console.log(this.hide)
  }

  AddSession(value : string){
    this.timeSession=this.timeSession + parseInt(value)+1;
  }

  startHorloge(){
    setInterval(() => {
      this.horloge = new Date();
    }, 1000);
  }

  startSession(second:number){
    this.timeSession =second; 
    setInterval(() => {
      if(this.timeSession>0)
      {
        this.timeSession--;
        this.numberToTime(this.timeSession);
      }
    }, 1000);
  }

  numberToTime(nombre : number){
    this.stringRebour="";
    let sec=nombre%60;
    let min=Math.trunc(nombre/60);
    if(min){this.stringRebour+=min+`min : `;};
    this.stringRebour+=sec+`s`;
  }

  deconnection(){
    this.router.navigate(["/login"])
  }
}
