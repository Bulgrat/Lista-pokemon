import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2/pokemon?limit=9999';
  private apiP = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) {
  }
  obterPokemonS():Observable<any> {
    return this.httpClient
    .get<any>(this.api)
    .pipe();
  }
  onePokeS(param) {
    return this.httpClient
    .get<any>(this.apiP+param)
    .pipe();
  }
  typeS(tipo){
    return this.httpClient.get<any>(tipo)
    .pipe();
  }
}
