import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/operators';
import {Http} from '@angular/http';
import {User} from 'assets/hero';
import {Track} from 'assets/hero';
@Injectable()
export class UsersService {
  apiUrl:string='https://itunes.apple.com/search';
  tracks:Observable<Track[]>;
  user:Observable<User[]>;
  constructor(private http:Http) { }

  searchTracks(term:string):Observable<Track[]>{
    let apiURL = `${this.apiUrl}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL)
    .map(res=>{
      return res.json().results.map(item =>{
         return item;
      });
    });
    
  }
  search(term:string):Observable<User[]>{
  let apiURL = './assets/users.json';
    return this.http.get(apiURL)
    .map(res=>{
      return res.json()
      .filter(item=>{
         return item.first_name===  term;
      })
    })
    
  }
}
