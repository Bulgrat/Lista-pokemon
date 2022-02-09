import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
  }
}
