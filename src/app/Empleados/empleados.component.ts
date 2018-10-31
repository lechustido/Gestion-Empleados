import { Component } from "@angular/core";
import { Empleado} from "./empleado";
import { EmpleadoService } from "./empleado.service";

@Component({
        selector: "empleados",
        templateUrl: "./empleados.component.html",
        providers: [EmpleadoService]
})

export class EmpleadosComponent{

    public listaEmpleados:Array<Empleado>;
    public empleado:Empleado;
    public listaEmpleadosDespedir: Array<Empleado>;

    constructor(
        private _empleadoService: EmpleadoService
    ){
        this.listaEmpleados = [
            new Empleado("Gonzalo","Carmenado","Ruiz","17/8/1994","Director",100000,765983647,"+34"),
            new Empleado("rodrigo","Carmenado","Ruiz","2/8/1997","Jefe de proyecto",80000,974563857,"+34"),
            new Empleado("Javier","Carmenado","Martín","2/4/1954","Jefe de grupo",60000,354758673,"+56"),
            new Empleado("Laura","Ruiz","Jimenez","3/2/1974","profesora",60000,874658364,"+54"),
            new Empleado("Pepe","Manuel","Rodriguez","1/1/1944","Administración",40000,65488273,"+59"),
        ]
    }

    anadirEmpleadoDespedir(empleado){
        this._empleadoService.empleadorDespedirAnadir(empleado);
        this.listaEmpleadosDespedir = this._empleadoService.getListaEmpleadosDespedir();
    }

    eliminarEmpleadoDespedir(indice){
        this._empleadoService.empleadoDespedirBorrar(indice);
        this.listaEmpleadosDespedir = this._empleadoService.getListaEmpleadosDespedir();
    }
}