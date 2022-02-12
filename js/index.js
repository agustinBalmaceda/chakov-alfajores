import { productos } from "./data.js";
import { Carrito } from "./carrito.js"

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
    console.log( item.nombre )
    carrito.createItem( item.nombre ) 
    alert ( "agregaste al carrito: " + item.nombre )
    alert (`tu carrito tiene ${ JSON.stringify( carrito.findAllItems())}`)
}

)

    //eventos del clic
itemList.onmouseover = () => {
    itemList.setAttribute("style", "font-size: 30px" )
}


itemList.onmouseleave = () => {
    itemList.setAttribute("style", "font-size: 17px" )

}}



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

const verCarrito = document.getElementById("verCarrito")
verCarrito.addEventListener("click", function(){
    alert (`tu carrito tiene ${ JSON.stringify( carrito.findAllItems())}`)

})



const botonComprar = document.getElementById("boton-de-compra")
botonComprar.addEventListener("click", function(){
    alert (`compraste ${ JSON.stringify( carrito.findAllItems())}`)
})




const botonDeArrepentimiento = document.getElementById("botonDeArrepentimiento")
botonDeArrepentimiento.addEventListener("click", function(){
  //  carrito.deleteItem ( item.nombre ) 
 //localStorage.removeItem( item.nombre );

    alert (`DEVOLVISTE ${ JSON.stringify( carrito.findAllItems())}`)
    throw new Error("dar de baja la compra")

    
})

// const eliminarCarrito = document.getElementById("botonDeArrepentimiento")
// eliminarCarrito.addEventListener("click", function(){
// carrito.deleteItem ( item.nombre ) 
// alert ("carrito vacio")    
// })






















