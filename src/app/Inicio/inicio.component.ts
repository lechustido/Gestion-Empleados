import { Component } from "@angular/core";
import { Route, ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'inicio',
    templateUrl: './inicio.component.html'
})

export class InicioComponent{
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    goProductosParams(producto){
        this._router.navigate(['/productos', producto]);
    }
}