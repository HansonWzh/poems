import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroservice } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroservice: Heroservice) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
