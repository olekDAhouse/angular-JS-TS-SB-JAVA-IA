import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup = new FormGroup([]);

  constructor(private fb: FormBuilder,
    private validadores: ValidadoresService) {
    this.crearFormulario();
    this.cargarDataFormulario();
    this.cargarListeners();
  }

  ngOnInit(): void {}

  get nombreNoValido() {
    return (
      this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
    );
  }

  get apellidoNoValido() {
    return (
      this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
    );
  }

  get correoNoValido() {
    return (
      this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched
    );
  }

  get usuarioNoValido() {
    return (
      this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched
    );
  }

  get distritoNoValido() {
    return (
      this.forma.get('dirreccion.distrito')?.invalid &&
      this.forma.get('dirreccion.distrito')?.touched
    );
  }

  get ciudadNoValido() {
    return (
      this.forma.get('dirreccion.ciudad')?.invalid &&
      this.forma.get('dirreccion.ciudad')?.touched
    );
  }

  get pasatiempos (){
    return this.forma.get('pasatiempos') as FormArray;
  }

  get pass1NoValido() {
    return (
      this.forma.get('pass1')?.invalid &&
      this.forma.get('pass2')?.touched
    );
  }

  get pass2NoValido() {
    const pass1 = this.forma.get('pass1')?.value;
    const pass2 = this.forma.get('pass2')?.value;

    return (pass1 === pass2) ? false : true;
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required,this.validadores.noHerrera]],
      correo: [
        '',
        [
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          Validators.required,
        ],
      ],
      usuario: ['', , this.validadores.existeUsuario],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      dirreccion: this.fb.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
      pasatiempos: this.fb.array([])
    },
    {validators: this.validadores.passwordsIguales('pass1','pass2')});
  }

  cargarListeners(){
    this.forma.valueChanges.subscribe( change =>{
    console.log(change);
    });

    this.forma.statusChanges.subscribe( status =>{
    console.log(status);
    });

    this.forma.get('usuario')?.valueChanges.subscribe(res=> console.log(res));
  }
  cargarDataFormulario() {
    this.forma.reset({
      nombre: '',
      correo: 'a@everis.com',
      dirreccion: {
        distrito: '',
        ciudad: '',
      },
    });

    ['Comer','Dormir'].forEach( val => this.pasatiempos.push(this.fb.control(val)));
  }
  guardar() {
    console.log(this.forma);
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) => {
            control.markAsTouched();
          });
        } else {
          control.markAsTouched();
        }
      });
    }
    this.forma.reset();
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.fb.control(''));
  }
  borrarElemento( i: number ){
    this.pasatiempos.removeAt(i);
  }
}
