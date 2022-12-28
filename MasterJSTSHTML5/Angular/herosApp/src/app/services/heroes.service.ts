import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  private url = 'https://fir-project-26da8-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient ) { }

  crearHeroe(heroe: HeroeModel){
    return this.http.post(`${this.url}/heroes.json`,heroe)
    .pipe(
      map( (resp: any) =>{
        heroe.id = resp.name;
        return heroe;
      })
    );
  }

  actualizarHeroe(heroe: HeroeModel){

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  getHeroes(){
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        map( this.crearArreglo),
        delay(1500)
      );
  }
  crearArreglo(heroesObj : Object ){

    let heroes: HeroeModel[] = [];

    Object.entries(heroesObj).forEach ( (entry)=> {
      const [key , value] = entry;
      value.id = key;

      heroes.push(value);
    });
    if ( heroesObj === null ) { return  [];}
    return heroes;

  }
  getHeroe(id:string | undefined){
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  borrarHeroe(id :string | undefined ){
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }
}
