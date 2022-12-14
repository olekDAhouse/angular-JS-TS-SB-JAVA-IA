import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}

  getPaises() {
    return this.http.get('https://restcountries.com/v2/lang/es').pipe(
      map((res: any) => {
        return res.map((pais: any) =>
          ({
            nombre: pais.name,
            codigo: pais.alpha3Code,
          })
        );
      })
    );
  }
}
