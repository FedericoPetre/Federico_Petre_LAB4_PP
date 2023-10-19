import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto.component';
import { AltaProductoComponent } from 'src/app/componentes/alta-producto/alta-producto.component';
import { loginGuard } from 'src/app/guards/login.guard';

const routes: Routes = [{ path: '', component: ProductoComponent,
children:
[ {path:'altaProducto', component:AltaProductoComponent, title:'Alta de Productos', canActivate:[loginGuard]}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
