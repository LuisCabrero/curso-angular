import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html'
})
export class FiltroComponent implements OnInit {
  heroes:Heroe[] = []
  termino:string = ""

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }
}
