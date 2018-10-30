import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Producto } from "./producto";

@Component({
    selector: 'productos',
    templateUrl: './productos.component.html'
})

export class ProductosComponent{
    public idProductoRecibido:string;
    public listaProductos: Array<Producto>;
    public productoSeleccionado: Producto;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.listaProductos = [
            new Producto("1","PC","PC muy caro",1900.56,"Informatica","",false),
            new Producto("2","One Plus 6","Movil muy bueno",500.39,"Telefonía","",true),
            new Producto("3","Cable de red","Cable de fibra optica",10.34,"Informatica","",false),
            new Producto("4","Nintendo Switch","Consola portaril",340.82,"Videojuegos","",false),
        ];
    }

    ngOnInit(){
        this._route.params.forEach((parametros: Params) => {
            this.idProductoRecibido = parametros['producto'];
        });

        if(this.idProductoRecibido != undefined){
            for(let producto of this.listaProductos){
                if(producto.id === this.idProductoRecibido){
                    this.productoSeleccionado = new Producto (
                        producto.id, producto.nombre, producto.descripcion,
                        producto.precio, producto.categoria, producto.imagen,
                        producto.agotado);
                }
            }
        }
    }

    seleccionarProducto(productoSelecion){
        this.productoSeleccionado = new Producto (
            productoSelecion.id, productoSelecion.nombre, productoSelecion.descripcion,
            productoSelecion.precio, productoSelecion.categoria, productoSelecion.imagen,
            productoSelecion.agotado);
    }
}