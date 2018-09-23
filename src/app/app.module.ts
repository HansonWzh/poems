import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './poets/hero-detail.component';
import { HeroesComponent } from './poems/heroes.component';

import { AppRoutingModule } from './app-routing.module';
import { PoetComponent } from './poet/poet.component';
import { PoemComponent } from './poem/poem.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    PoetComponent,
    PoemComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
