import { Injectable } from '@angular/core';
import { User } from 'src/app/@model/user';
import { FONCTIONS, USERS } from 'src/app/@data/data';

@Injectable()
export class UserServiceService {

  constructor() { }
  getAllUser():User[]{
    return USERS;
  }
  getUserById(userId:number):User|undefined{
    return USERS.find(user => user.id == userId)
  }
  getAllFonction():string[]{
    return FONCTIONS;
  }
}
