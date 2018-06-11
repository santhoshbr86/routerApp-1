import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages=[
   {id:1,message:'First messag'},
   {id:2,message:'second messag'},
 ];
  constructor() { }

  getMessage(){
    return this.messages;
  }

}
