import { Injectable } from '@angular/core';
import { User } from 'src/app/@model/user';
import { responseTab , responseVal } from 'src/app/@model/response';
import { FONCTIONS } from 'src/app/@data/data';
import { Observable , catchError , pipe , tap, of } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getAllUser(): Observable<User[]>{
    return this.http.get<responseTab>(`http://localhost:3000/list`).pipe(
      map(response => response.data)
    );
  }
  getUserById(userId:number):Observable<User>{
    return this.http.get<responseVal>(`http://localhost:3000/list/${userId}`).pipe(
      map(response => response.data)
    );
  }
  getAllFonction():string[]{
    return FONCTIONS;
  }
}
