import { productos } from "./data.js";
import { Carrito } from "./carrito.js"
import { renderList } from "./utils.js";

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

    itemList.setAttribute("style", "background-color: skyblue")
}

itemList.onmouseleave = () => {
    itemList.setAttribute("style", "background-color:fondoCrema" )
}

}

// jquery
// for( const producto of productos) {
// $("#productos").append(`<div id="${producto.id}">${producto.nombre}</div>`)
    
//     $(`#${producto.id}`).on("click", function(){
//         alert(`click en ${producto.nombre}`)
//     })
// }

// $("body").prepend(`<input id="input" type="text"/>`)
// $("body").prepend(`<button id="button">boton</button>`)
// $("#input").change((event) => {
//     console.log(event.target.value)
// })
//fin de jquery




const botonComprar = document.getElementById("boton-de-compra")
botonComprar.addEventListener("click", function(){
    alert (`compraste ${ JSON.stringify( carrito.findAllItems())}`)
})

const botonDeArrepentimiento = document.getElementById("botonDeArrepentimiento")
botonDeArrepentimiento.addEventListener("click", function(){
    alert (`devolviste ${ JSON.stringify( carrito.findAllItems())}`)
    throw new Error("dar de baja la compra");

})


















