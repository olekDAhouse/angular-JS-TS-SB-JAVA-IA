import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { info } from 'console';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

  }

  login(form: NgForm){
    if(form.invalid) return;

    Swal.fire({

    title: 'LOADING',
    text: 'Espere por favor ...'
    })
    this.auth.login(this.usuario).subscribe(res =>{
    console.log(res);
    },
    (err)=>{
      console.log(err.error.error.message);
    });
  }

}
