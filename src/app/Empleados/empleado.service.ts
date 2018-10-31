import { Injectable } from "@angular/core";
import { Empleado } from "./empleado";

@Injectable()

export class EmpleadoService{
    public listaEmpleadosDespedir: Array<Empleado>;

    constructor(){
        this.listaEmpleadosDespedir = []
    }

    empleadorDespedirAnadir(empleado:Empleado){
        this.listaEmpleadosDespedir.push(empleado);
        this.getListaEmpleadosDespedir();
    }

    empleadoDespedirBorrar(indice){
        this.listaEmpleadosDespedir.splice(indice,1);
        this.getListaEmpleadosDespedir();
    }

    getListaEmpleadosDespedir(){
        return this.listaEmpleadosDespedir;
    }
}