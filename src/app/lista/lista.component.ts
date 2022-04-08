import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  branco = 'https://www.colorhexa.com/d3d3d3.png';

  constructor(public pokemonService: PokemonService) { }

  mudarPkm(valor) {
    this.pokemonService.onePoke(valor)
  }
  ngOnInit(): void { }
}
