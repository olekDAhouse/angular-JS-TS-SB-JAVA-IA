import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pokemon } from '../shared/modules/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  urlBase = 'https://pokeapi.co/api/v2';
  pokemonsRegistrados: Pokemon[] = [];

  constructor(private http: HttpClient) {
    this.cargarStorage();
  }


  // Devuelve todos los tipos de Pokemon
  getAllTypes() {
    return this.http.get(`${this.urlBase}/type`).pipe( map((res: any) => {
      return res?.results?.map((result: any) =>
        ({
          nombre: result.name,
          id: parseInt(result.url.substr(result.url.lastIndexOf('type/')+5)),
        })
      );
    })
  );
  }
  // Devuelve todos los datos de un tipo incluyendo los Pokemons del tipo, key puede  ser id o  nombre
  getType(key: string) {
    return this.http.get(`${this.urlBase}/type/${key}`).pipe( map ((res:any)=>{
      return res?.pokemon
    }));
  }
  // Devuelve un listado con los datos básicos de todos los Pokemon. No admite filtros.
  getAllBasicInfo() {
    return this.http.get(`${this.urlBase}/pokemon`).pipe( map((res: any) => {
      return res?.results?.map((result: any) =>
        ({
          nombre: result.name,
          id: parseInt(result.url.substr(result.url.lastIndexOf('pokemon/')+8)),
        })
      );
    })
  );
  }
  // Devuelve todos los datos de un Pokemon
  getPokemonInfo(key: string) {
    return this.http.get(`${this.urlBase}/pokemon/${key}`);
  }
  // registramos la información de  un nuevo  pokémon
  guardarStorage(){
    //pasar a string la lista
  localStorage.setItem('datosRegistrados',JSON.stringify(this.pokemonsRegistrados));
}
//Obtenemos nuestros pokemons registrados
cargarStorage(){
  if(localStorage.getItem('datosRegistrados')){
    const local = localStorage.getItem('datosRegistrados');
    this.pokemonsRegistrados = JSON.parse(local || '');
  }
  console.log(localStorage.getItem('datosRegistrados'));
}
}
