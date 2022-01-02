export const renderList = (listaId, lista) => {
    const listaContainer = document.getElementById( listaId )
 for ( const item of lista ) {
     const itemList =  document.createElement("li")
     //console.log(item)
     itemList.innerHTML = `<span>
     <strong>

     ${item.nombre}

     </strong>
     </span>`
     listaContainer.appendChild( itemList )
    }
}