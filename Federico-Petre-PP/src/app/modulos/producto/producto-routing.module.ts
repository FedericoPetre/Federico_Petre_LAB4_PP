import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto.component';
import { AltaProductoComponent } from 'src/app/componentes/alta-producto/alta-producto.component';
import { loginGuard } from 'src/app/guards/login.guard';
import { DetalleCompletoProductoPaisComponent } from 'src/app/componentes/detalle-completo-producto-pais/detalle-completo-producto-pais.component';
import { ProductosListadoPublicoComponent } from 'src/app/componentes/productos-listado-publico/productos-listado-publico.component';

const routes: Routes = [{ path: '', component: ProductoComponent,
children:
[ {path:'altaProducto', component:AltaProductoComponent, title:'Alta de Productos', canActivate:[loginGuard]},
{path:'detalleProducto', component:DetalleCompletoProductoPaisComponent, title:'detalle producto', canActivate:[loginGuard]},
{path:'listadoPublicoProducto', component:ProductosListadoPublicoComponent, title:'Listado público de productos'},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
