import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass'],
})
export class RegistroComponent implements OnInit {
  pokemon = {
    nombre: '',
    peso: '',
    tipo: '',
  };

  tipos: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getAllBasicInfo()
      .subscribe((res) => console.log('basicInfo', res));
    this.pokemonService.getAllTypes().subscribe((res) => {
      if (!res) return;
      this.tipos = res;
      this.tipos.unshift({
        nombre: 'Seleccione Tipo',
        id: ''
      });

    });
  }
  guardar(forma: NgForm) {
    if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }
    this.pokemonService.pokemonsRegistrados.push(forma.value);
    this.pokemonService.guardarStorage();
  }
}
