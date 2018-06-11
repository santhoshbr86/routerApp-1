import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {States} from '../data-model'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
 heroForm:FormGroup;
 states=States;
  constructor(private fb:FormBuilder) {
    this.heroForm=this.fb.group({
      name:['',Validators.required],
      alterEgo:'',
      address:this.fb.group({
        street:'',
        city:'',
        state:this.states[0],
        zip:''
      })
    });
   }

  ngOnInit() {
  }

}
