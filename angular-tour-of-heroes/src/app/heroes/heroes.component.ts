import { Component } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  }
  selectedHero?: Hero;
  heroes : Hero[] = [];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  constructor (private heroService: HeroService, private messageService: MessagesService) {};
  getHeroes() : void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() : void{
    this.getHeroes();
  }
  
}
