import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioAltaProductoComponent } from './componentes/formulario-alta-producto/formulario-alta-producto.component';
import { ListadoPaisesComponent } from './componentes/listado-paises/listado-paises.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { DetalleCompletoProductoPaisComponent } from './componentes/detalle-completo-producto-pais/detalle-completo-producto-pais.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { ListadoProductosComponent } from './componentes/listado-productos/listado-productos.component';
import { ProductosListadoPublicoComponent } from './componentes/productos-listado-publico/productos-listado-publico.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    FormularioAltaProductoComponent,
    ListadoPaisesComponent,
    AltaProductoComponent,
    DetalleCompletoProductoPaisComponent,
    DetallePaisComponent,
    DetalleProductoComponent,
    ListadoProductosComponent,
    ProductosListadoPublicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
