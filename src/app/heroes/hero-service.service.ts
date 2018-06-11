import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/Observable/of';

import {Hero} from 'assets/hero';
import {Herolist} from 'assets/hero-mock';

@Injectable()
export class HeroServiceService {

  constructor() { }
  getHeroes():Observable<Hero[]>{
    return of(Herolist);
  }
  getHero(id:string):Observable<Hero>{
    return of(Herolist.find(hero => hero.id===parseInt(id)));
  }
}
