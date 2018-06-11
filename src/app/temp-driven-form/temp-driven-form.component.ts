import { Component, OnInit } from '@angular/core';
import {Hero} from '../../assets/formhero';
@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.css']
})
export class TempDrivenFormComponent implements OnInit {
  powers=['Really Smart','Super Flexible', 'super Hot', 'Weather changer'];
  model = new Hero(12,'MR IQ',this.powers[3],'check overstreet');
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.model);
  }
}
