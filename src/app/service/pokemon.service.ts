import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  poke: any = {};
  oneP: any = { abilities : [], type : []};
  pokemon: any = '';
  
  constructor(private httpClient: HttpClient) { 
    this.pokemons()
  }
  // https://pokeapi.co/api/v2/type/normal
  async pokemons() {
    const requisicao = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=9999')
    .toPromise();
    this.poke = requisicao.results;
  }

  async onePoke(param) {    
    const request = await this.httpClient
    .get<any>(`https://pokeapi.co/api/v2/pokemon/${param}`)
    .toPromise();
    this.oneP = request;  
  }
}
