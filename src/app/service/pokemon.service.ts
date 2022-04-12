import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // poke: any = {};
  // typ: any = {};

  constructor(private httpClient: HttpClient) {
  }
  obterPokemonS():Observable<any> {
    return this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=9999')
    .pipe();
  }
  onePokeS(param) {
    return this.httpClient
    .get<any>(`https://pokeapi.co/api/v2/pokemon/${param}`)
    .pipe();
  }
  typeS(tipo){
    return this.httpClient.get<any>(tipo)
    .pipe();
  }
}
