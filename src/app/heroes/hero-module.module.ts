import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroServiceService} from './hero-service.service';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {MessageService} from '../message.service';
const appRoutes:Routes=[
  {path:'heroList', component:HeroListComponent, data: { animation: 'tiger' }},
  {path:'heroDetail/:id', component:HeroDetailComponent, data: { animation: 'dolphin' }}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HeroDetailComponent,
    HeroListComponent
  ],
  providers:[
    HeroServiceService,
    MessageService
  ],
exports:[
  RouterModule
]
})
export class HeroModuleModule { }
