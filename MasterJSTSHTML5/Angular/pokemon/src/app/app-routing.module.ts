import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'listado', component: ListadoComponent},
  {path: '**', pathMatch: 'full', redirectTo:'listado'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
