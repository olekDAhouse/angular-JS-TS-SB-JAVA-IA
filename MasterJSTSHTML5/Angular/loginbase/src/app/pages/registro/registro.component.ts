import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private authService : AuthService) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

    this.usuario.email = "olekdahouse@gmail.com";


  }

  onSubmit( form: NgForm ){

    if(form.invalid) return;
    console.log(this.usuario);
    console.log(form);
    this.authService.registrar(this.usuario).subscribe(res=> {
    console.log(res);
    },
    (err)=>{
    console.log(err.error.error.message);
    });
  }


}
