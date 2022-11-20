import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
private apiKey = 'AIzaSyDN9LZKLO5YrtLbdoIknIGHFPKc-NDA8jg';
private usuarioToken = '';
// crear usuario
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// iniciar sesion
 // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }


  logout(){

  }

  login( usuario: UsuarioModel){

    const authData  = {
      ...usuario,
      returnSecureToken:true
    };
    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(map(resp =>{
      console.log('entro mapa RxJS');
      this.guardarToken( resp['idToken']);
      return resp;
    }));

  }

  registrar(usuario:UsuarioModel) {
    const authData  = {
      ...usuario,
      returnSecureToken:true
    };
    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    ).pipe(map(resp =>{
      console.log('entro mapa RxJS');
      this.guardarToken( resp['idToken']);
      return resp;
    }));
  }

  private guardarToken(idToken: string){


    if(localStorage.getItem(idToken)){
      this.usuarioToken = idToken;
    }
    return this.usuarioToken;
  }
}
