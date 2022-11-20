import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre : 'Oleksandr',
    apellido : 'Naumov',
    correo : 'oleksandr.naumov93@gmail.com',
    pais: 'BLZ',
    genero: 'M'
  };

  paises: any[] = [];

  constructor(private pais: PaisService) { }

  ngOnInit(): void {
    this.pais.getPaises().subscribe(res=>{
      console.log('paises',res);
      this.paises = res;
      this.paises.unshift({
        nombre: '[Seleccione Pais]',
        codigo: ''
      })
    });
  }
  guardar( forma: NgForm){
    if(forma.invalid){
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      console.log(control);
      });
      return;
    }
  console.log(forma.value);
  console.log(forma.valid);

  }
}
