import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'multiplicacion'})

export class MultiplicacionPipe implements PipeTransform{
    transform(valorUno, valorDos){
        return valorUno + " X " + valorDos + " = " + (valorUno * valorDos)
    }
}