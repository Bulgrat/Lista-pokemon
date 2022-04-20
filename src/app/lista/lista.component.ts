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
  types: any = {};
  // pokemon: string;

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.obterPokemons();
  }

  mudarPkm(event) {
    this.pokemonService
      .onePokeS(event)
      .pipe()
      .subscribe((poke) => {
        this.oneP = poke;
        this.types = poke.types;
        poke.types.forEach(tipo => {
          this.pokemonService.typeS(this.types).pipe().subscribe(type =>{

          });
        });
        // this.pokemonService.typeS(this.types).pipe().subscribe(type =>{

        // });
        console.table(this.types[0].type.url);
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
