export class Producto{ 
    constructor (id, nombre, precio,cantidad, stock)
    {   this.id= id;
        this.nombre =nombre;
        this.precio =precio;
        this.cantidad =cantidad;
        this.stock =stock;
    }

getNombre() {
    return this.nombre;}
getPrecio() {
    return this.precio;}
agotado () {
    this.stock=false;
}
}

const producto1= new Producto(1, "alfajor", 100, 100, true);
const producto2= new Producto(2, "trufas", 80, 50, true);
const producto3= new Producto(3, "galletitas", 90, 25, true);

