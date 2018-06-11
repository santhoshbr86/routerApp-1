import { Component, OnInit,HostBinding } from '@angular/core';
import {Herolist} from 'assets/hero-mock';
import {Router} from '@angular/router'
import {Hero} from 'assets/hero';
import {MessageService} from '../../message.service';
//import {slideInDownAnimation} from 'assets/animation';
@Component({
  selector: 'app-hero-list',
  //animations:[slideInDownAnimation],
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  //  @HostBinding('style.display') display = 'block';
  //  @HostBinding('style.position') Position = 'absolute';
  heroList:Hero[]=Herolist;
  selectedHero=Hero;
  constructor(private router: Router, private message:MessageService) { }
  ngOnInit() {
    
  }
  onSelect(hero){
    this.selectedHero=hero;
    this.router.navigate(['heroDetail',hero.id]);
    console.log(this.selectedHero);
  }
}
