import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {switchMap} from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {User} from 'assets/hero';
import {UsersService} from '../users.service';
import {Track} from 'assets/hero';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-observer1',
  templateUrl: './observer1.component.html',
  styleUrls: ['./observer1.component.css']
})
export class Observer1Component implements OnInit {
  users:Observable<User[]>;
  tracks:Observable<Track[]>;
  searchField:FormControl;
  constructor(private userService:UsersService) { 
    
  }

  ngOnInit() {
    this.searchField=new FormControl();
    this.tracks=this.searchField.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap(term=>this.userService.searchTracks(term));
    
    this.users=this.searchField.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap(term=>this.userService.search(term));
    

    const   myObservables = Observable.of(1,2,3,4,5);
    const myObserver = {
      next:x => console.log('Observe',x),
      error:err => console.log('Error',err),
      complete:() => console.log('completed')
    }
    myObservables.subscribe(myObserver);
  }
//   const locations = new Observable((observer) => {
//     const {next, error} = observer;
//     let watchId;
//       if('geolocation' in navigator){
//         watchId=navigator.geolocation.watchPosition(next,error);
//       }
//       else{
//         error('Geolocation not available');
//       }
//       return {unsubscribe(){
//         navigator.geolocation.clearWatch(watchId);
//       }}
//   });
//   const locationSubscription = locations.subscribe({
//   next(position){console.log('Current Position',position);},
//   error(msg){console.log('Error getting location', msg);}
// });
// setTimeout(()=>{locationSubscription.unsubscribe();},1000);

}

