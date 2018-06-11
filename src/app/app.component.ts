import { Component } from '@angular/core';
import {slideInDownAnimation} from 'assets/animation';
@Component({
  selector: 'app-root',
  animations:[slideInDownAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
