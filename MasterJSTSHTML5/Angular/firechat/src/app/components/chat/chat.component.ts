import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string ="";
  elemento: any;

  constructor(public chatService: ChatService) {
    chatService.cargarMensajes().subscribe(
      () =>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }
    );
    /*( msg:any)=>{
    console.log('kkk',msg);
    });*/
   }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }
  enviarMensaje(){


    if( this.mensaje.length === 0){
      return;
    }
    this.chatService.agregarMensaje(this.mensaje)
                  .then(()=> this.mensaje = "")
                  .catch(()=> console.log('mensaje fallido'));
  }
}
