import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {
  pokemons: any [] = [];
  tipos: any[] = [];
  pokemon = {
    nombre: '',
    tipo: ''
  };
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getAllBasicInfo().subscribe(res =>{


      if(res) {
        this.pokemons = this.pokemonService.pokemonsRegistrados;
      }


    });
    this.pokemonService.getAllTypes().subscribe(res =>{
      if(!res) return;
      this.tipos = res;
      this.tipos.unshift({
        nombre: 'Seleccione Tipo',
        id: ''
      });
    });

  }
  getPokemonsType(key:string){

    this.pokemonService.getType(key).subscribe(res=>{
      if(res){
        this.pokemons = res;
        this.addCreatedPokemons(key);
      }
      console.log(res);
    });
  }
  addCreatedPokemons(key:string){
    console.log(this.pokemonService.pokemonsRegistrados);
    console.log(this.pokemonService.pokemonsRegistrados.find(pokemon =>{

      pokemon.tipo == '1';
    }));
    this.pokemons.unshift(this.pokemonService.pokemonsRegistrados.filter(pokemon =>{

      pokemon.tipo = key;
    }));
  }

  buscar( forma: NgForm){
    if(forma.invalid){
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();

      });
      return;
    }
    this.getPokemonsType(forma.value.tipo);

  }

}
