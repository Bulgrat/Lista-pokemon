import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  branco = 'https://www.colorhexa.com/d3d3d3.png';
  oneP: any = {};
  pokemons: any = '';
  // pokemon: string;
  type: any = {};

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.obterPokemons();
  }

  mudarPkm(event) {
    console.table(event);
    this.pokemonService
      .onePokeS(event)
      .pipe()
      .subscribe((poke) => {
        this.oneP = poke;
        this.type = poke.types;
        // this.pokemonService.typeS(this.type).pipe().subscribe(type =>{

        // }
        // );
        // console.table(this.type);
      });
  }

  private obterPokemons(): void {
    this.pokemonService
      .obterPokemonS()
      .pipe()
      .subscribe((pokemons) => {
        this.pokemons = pokemons.results;
      });
  }
}
