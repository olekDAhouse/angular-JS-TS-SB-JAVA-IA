import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  itemsCollection!: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];
  public usuario: any = {};
  constructor( private afs: AngularFirestore ,
    public afAuth: AngularFireAuth) {

this.afAuth.authState.subscribe( user => {

console.log( 'Estado del usuario: ', user );

if( !user ){
return;
}

this.usuario.nombre = user.displayName;
this.usuario.uid = user.uid;


})

}
login( proveedor: string ) {

  if( proveedor === 'google' ){
    this.afAuth.signInWithPopup(new firebase..GoogleAuthProvider());
  }else{
    this.afAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

}

logout() {
  this.usuario = {};
  this.afAuth.auth.signOut();
}
  cargarMensajes(){
    this.itemsCollection = this.angularFireStore.collection<Mensaje>('chats', ref=> ref.orderBy('fecha','desc').limit(5));

    return this.itemsCollection.valueChanges()
    .pipe(
      map((mensajes: any) => {

        this.chats = [];

        for ( let mensaje of mensajes){
          this.chats.unshift( mensaje );
        }
        return this.chats;

      })
    );
  }

  agregarMensaje(texto: string){
    let mensaje: Mensaje = {
      nombre: 'FernandoD',
      mensaje: texto,
      fecha: new Date().getTime()
    }
    return this.itemsCollection.add ( mensaje);
  }
}
