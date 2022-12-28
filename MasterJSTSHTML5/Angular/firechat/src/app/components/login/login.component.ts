import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor( public _cs: ChatService ) { }

  ingresar( proveedor: string ){
    console.log( proveedor );

    this._cs.login( proveedor );

  }

}