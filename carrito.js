 export class Carrito {
    constructor( lista )
    {
        this.lista = JSON.parse(localStorage.getItem ("carrito")) || [];
    }
    findAllItems(){
        return this.lista;
    }
    createItem( item ){



        this.lista.push ( { item, cantidad:1} )
        localStorage.setItem("carrito", JSON.stringify(this.lista))
}
    findOneByIdItem ( itemId ) {
        const item = this.lista.find( element=> element.id===itemId )
        if ( item ) {throw new Error("no existe el item id:"+ itemId)
    }
    return item;
    }

    updateItem ( itemId, cantidad ){
        const item= this.findOneByIdItem( itemId );
        const index = this.lista.indexOf( item );
        this.lista [index].cantidad = cantidad;
        if(cantidad<=0){this.lista[index].stock= false
        }
        
        deleteItem( itemId );{
            const item = this.findOneByIdItem ( itemId );
            const index =  this.lista.indexOf ( item );
            this.lista.splice (index, 10);
        }
    
    getItem ( item ) 
    {}
    
    this.stock = false;
}}

// esto iba en el archivo producto
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




//const producto1= new Producto(1, "alfajor", 100, 100, true);
//const producto2= new Producto(2, "trufas", 80, 50, true);
//const producto3= new Producto(3, "galletitas", 90, 25, true); 
//hasta aca iba en el archivo producto
//const carrito = new Carrito ([])
////carrito.createItem ( producto1 )
//carrito.createItem ( producto2 )
//carrito.createItem ( producto3 )

const carritoFromStorage = JSON.parse(localStorage.getItem ("carrito"))


