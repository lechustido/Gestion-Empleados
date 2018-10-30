import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Para poder utilizar el routing,
import { routing, appRoutingProviders } from "./app.routing";

// Aquí van todos los componentes creados por mi.
import { EmpleadosComponent } from './Empleados/empleados.component';
import { InicioComponent } from './Inicio/inicio.component';
import { MenuPrincipalComponent } from "./MenuPrincipal/menuPrincipal.component";
import { ProductosComponent } from "./Productos/productos.component";

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    InicioComponent,
    MenuPrincipalComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
