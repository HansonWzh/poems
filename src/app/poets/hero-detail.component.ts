import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { Heroservice } from '../hero.service';
import { PoetService } from '../poet.service';
import { Poet } from '../poet';
import { Poem } from '../poem';
import { PoemService} from '../poem.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  poets: Poet[];
  poems: Poem[];

  constructor(
    private route: ActivatedRoute,
    private heroservice: Heroservice,
    private location: Location,
    private poetservice: PoetService,
    private poemservice: PoemService
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
