import { Routes} from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';


export const USUARIOS_ROUTES: Routes = [
        {path:'editar',component:UsuarioEditarComponent},
        {path:'detalle',component:UsuarioDetalleComponent},
        {path:'nuevo',component:UsuarioNuevoComponent},
        {path: '**', pathMatch: 'full', redirectTo: 'nuevo'}
];

