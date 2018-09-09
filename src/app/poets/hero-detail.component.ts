import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { Heroservice } from '../hero.service';
import { PoetService } from '../poet.service';
import { Poet } from '../poet';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  poets: Poet[];

  constructor(
    private route: ActivatedRoute,
    private heroservice: Heroservice,
    private location: Location,
    private poetservice: PoetService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroservice.getHero(id)
      .subscribe(hero => this.hero = hero);
    this.poetservice.getPoets(id)
      .subscribe(poets => this.poets = poets);
  }

  goBack(): void {
    this.location.back();
  }
}
