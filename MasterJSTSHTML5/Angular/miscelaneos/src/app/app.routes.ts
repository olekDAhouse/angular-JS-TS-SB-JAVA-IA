import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { USUARIOS_ROUTES } from './components/usuario/usuario.routes';


export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {
      path: 'usuario/:id',
      component: UsuarioComponent,
      children: USUARIOS_ROUTES
    },
    {path: '', pathMatch:'full', redirectTo:'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
export const app_routing= RouterModule.forRoot(ROUTES);
