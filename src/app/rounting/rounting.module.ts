import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

//import { HeroListComponent } from '../hero-list/hero-list.component';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import {HeroModuleModule} from '../heroes/hero-module.module';
import {Observer1Component} from '../observer1/observer1.component';
import {FrmsComponent} from '../frms/frms.component';
import {TempDrivenFormComponent} from '../temp-driven-form/temp-driven-form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
const appRoutes:Routes=[
  //{path:'heroList', component:HeroListComponent},
  {path:'crisisList', component:CrisisListComponent, data: { animation: 'tiger' }},
  {path:'observer', component:Observer1Component, data: { animation: 'tiger' }},
  {path:'forms', component:FrmsComponent, data: { animation: 'tiger' }},
  {path:'tempDriven', component:TempDrivenFormComponent, data: { animation: 'tiger' }},
  {path:'reactveForm', component:ReactiveFormComponent, data: { animation: 'tiger' }},
  {path:'', redirectTo:'heroList', pathMatch:'full', data: { animation: 'tiger' }},
  {path:'**', component:PageNotFoundComponent, data: { animation: 'tiger' }}
];
@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(appRoutes),
     HeroModuleModule
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class RountingModule { }
