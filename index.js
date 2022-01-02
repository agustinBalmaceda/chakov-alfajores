import { productos } from "./data.js";
import { Carrito } from "./carrito.js";
import { button1 } from "./eventos.js";

const carrito = new Carrito ();

const listaContainer = document.getElementById( "productos-lista" )
 for ( const item of productos ) {
     const itemList =  document.createElement("li")
     //console.log(item)
     itemList.innerHTML = `<span>
     <strong>

     ${item.nombre}

     </strong>
     </span>`
     listaContainer.appendChild( itemList )
itemList.addEventListener("click", function(){
    console.log( item.nombre)
    carrito.createItem( item )
}
)

    //eventos del clic
itemList.onmouseover = () => {

    itemList.setAttribute("style", "background-color: green")
}

itemList.onmouseleave = () => {
    itemList.setAttribute("style", "background-color: white" )
}

}

const botonComprar = document.getElementById("boton-de-compra")
botonComprar.addEventListener("click", function(){
    alert (`compraste ${ JSON.stringify( carrito.findAllItems())}`)
})



















