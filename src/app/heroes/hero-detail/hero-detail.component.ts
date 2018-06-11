import { Component, OnInit, HostBinding } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
//import {slideInDownAnimation} from 'assets/animation';

import {HeroServiceService} from '../hero-service.service';
import {Hero} from 'assets/Hero';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
 // animations:[slideInDownAnimation],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Observable<Hero>;
  //  @HostBinding('@routeAnimation') routeAnimation = true;
  //  @HostBinding('style.display') display = 'block';
  //  @HostBinding('style.position') Position = 'absolute';

  constructor(private router:Router,
     private activeRoute:ActivatedRoute,
     private service:HeroServiceService
     ) { }
  ngOnInit() {
    this.hero=this.activeRoute.paramMap
    .switchMap((params:ParamMap)=>
    this.service.getHero(params.get('id')));
   }
  goBack(){
    this.router.navigate(['heroList']);
  }
}
