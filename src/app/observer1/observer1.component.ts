import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-observer1',
  templateUrl: './observer1.component.html',
  styleUrls: ['./observer1.component.css']
})
export class Observer1Component implements OnInit {

  constructor() { }

  ngOnInit() {
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

