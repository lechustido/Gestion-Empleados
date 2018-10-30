import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Se importan nuestros propios controladores
import { EmpleadosComponent } from "./Empleados/empleados.component";
import { InicioComponent } from "./Inicio/inicio.component";
import { MenuPrincipalComponent } from "./MenuPrincipal/menuPrincipal.component";
import { ProductosComponent} from "./Productos/productos.component";

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'empleados', component: EmpleadosComponent},
    {path: 'menuPrincipal', component: MenuPrincipalComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'productos/:producto', component: ProductosComponent},
    {path: '**', component: InicioComponent}
]

//Es una variable que necesita angular para hacer los cambios de estados.
export const appRoutingProviders: any[] = [];
//Array de rutas que debe cargar. 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);