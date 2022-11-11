import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import {  Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})


export class ListasComponent implements OnInit {

  @ViewChild(IonList) lista: IonList;
  @Input()
  terminada = true;
  constructor(public deseosService : DeseosService,
             private router: Router,
             private alertCtrl: AlertController) { 
              
             }

  ngOnInit() {}

  
  listaSeleccionada(lista: Lista){
    if(!this.terminada){
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
    else{
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }
   
  }
  borrarLista(item : Lista){
    this.deseosService.borrarLista(item);
  }
  async modificarLista(item:Lista){
    
    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          value: item.titulo,
          placeholder: 'Modificar nombre de la lista',

        }

      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: ()=>{
          console.log('Cancelar');
          this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Modificar',
          handler: ( data ) => {
          console.log(data);
          if(data.lenght === 0){
            return;
          }
          item.titulo = data.titulo;
          this.deseosService.guardarStorage();
          this.lista.closeSlidingItems();
          }
        }],
    });
      
     alert.present();

  }
}
