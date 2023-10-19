import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { loginGuardSiYaEstaLogueado } from './guards/login.guard';

const routes: Routes = [
  {path:'bienvenida', component:BienvenidaComponent, title:'Bienvenido'},
  {path:'login', component:LoginComponent, title:'Iniciar Sesión',canActivate:[loginGuardSiYaEstaLogueado]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'producto', loadChildren: () => import('./modulos/producto/producto.module').then(m => m.ProductoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
