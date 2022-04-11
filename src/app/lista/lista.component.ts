import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  branco = 'https://www.colorhexa.com/d3d3d3.png';
  oneP: any = {};
  pokemons: any = '';
  pokemon: string;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.obterPokemons();
  }
  mudarPkm(event) {
    console.table(event);
    this.pokemonService.onePoke(event)
    .pipe().subscribe(poke =>{
      this.oneP = poke;
      console.table(this.oneP);
    });
  }
  private obterPokemons(): void{
    this.pokemonService.obterPokemon()
    .pipe().subscribe(pokemons =>{
      this.pokemons = pokemons.results;
    });
  }
}
