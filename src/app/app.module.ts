import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
//import { HeroListComponent } from './hero-list/hero-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RountingModule} from './rounting/rounting.module';
import {UsersService} from './users.service';
//import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import {HeroModuleModule} from './heroes/hero-module.module';
import { MessageService } from './message.service';
import { Observer1Component } from './observer1/observer1.component';
import { FrmsComponent } from './frms/frms.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
  //  HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    Observer1Component,
    FrmsComponent,
    TempDrivenFormComponent,
    ReactiveFormComponent,
  //HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    HeroModuleModule,
    RountingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [MessageService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
