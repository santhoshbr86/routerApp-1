import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frms',
  templateUrl: './frms.component.html',
  styleUrls: ['./frms.component.css']
})
export class FrmsComponent implements OnInit {
  values='';
  values2='';3
  values3='';
  heros=[];
  constructor() {}
  ngOnInit() { }

  onKey(event:any){
    this.values+=event.target.value + '|';
  }
  onKeyup(value:string){
    this.values2+=value+'|';
  }
  onEnter(value:string){
    this.values3=value;
  }
  add(newHero,value:string){
    this.heros.push(value);
    newHero.value=' '
  }
}
