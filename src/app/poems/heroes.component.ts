import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { Heroservice } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroservice: Heroservice) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
