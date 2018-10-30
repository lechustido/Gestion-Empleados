export class Producto{
    constructor(
        public id: string,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public categoria: string,
        public imagen: string,
        public agotado: boolean,
    ){}
}