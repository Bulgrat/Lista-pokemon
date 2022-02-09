import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  poke: any;
  oneP: any
  
  constructor(private httpClient: HttpClient) { 
    this.pokemons()

  }
  
  async pokemons() {
    const requisicao = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
    .toPromise();

    this.poke = requisicao.results;
  }

  async onePoke() {
    const request = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .toPromise();
    // https://pokeapi.co/api/v2/pokemon-form/1/
    this.oneP = request.abilities;
    console.log(request);
    
  }
}
