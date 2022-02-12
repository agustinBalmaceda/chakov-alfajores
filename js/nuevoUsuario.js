$('body').prepend(`
<form id="createUser" style="margin:5%; margin-right: 77%;">
<input id="input-name" placeholder="nombre" type="text">
<input id="input-age" placeholder="edad" type="number">
<input id="input-apellido" placeholder="apellido" type="text">
<input id="input-email" placeholder="email" type="text">
<input id="input-direccion" placeholder="direccion" type="text">
<input id="input-telefono" placeholder="telefono" type="number">
<input id="input-submit" type="submit">
</form>
`)

$('#createUser').submit(function (event){
    event.preventDefault()
    console.log( event.target )

    let children = $(event.target).children();

    const nombre = $('#input-name')[0].value
    const edad = $('#input-age')[0].value
    const apellido = $('#input-apellido')[0].value
    const email = $('#input-email')[0].value
    const direccion = $('#input-direccion')[0].value
    const telefono = $('#input-telefono')[0].value

    if (edad > 18) 
    {alert ("hola "+ nombre + " " + apellido)}
    else {(edad < 18)
        console.log ("menor de edad")
    alert("credenciales invalidas: contraseña o edad inapropiados")
    throw new Error("ACCESO DENEGADO");
      
    }
    
    function Usuario (nombre , apellido , edad, 
        email, direccion, telefono)
        {   this.nombre= nombre;
        this.apellido= apellido;
        this.edad= edad;
        this.email= email;
        this.direccion= direccion;
        this.telefono= telefono;
    }
    
    
    const persona = new Usuario (nombre , apellido , edad, 
        email, direccion, telefono);
    console.log (persona)
    
    localStorage.setItem("Usuario", JSON.stringify(persona))

    console.log ("se creo el usuario")
    console.log ( "nombre: " + children[0].value)
    console.log ("edad: " + children[1].value)
    console.log ("apellido: " + children[2].value)
    console.log ("email: " +children[3].value)
    console.log ("direccion: " + children[4].value)
    console.log ("telefono: " +children[5].value)
})

$(function(){
$("#efectivo").click(function(){
    alert ("seguro deseas pagar en efectivo?");
    console.log ("paga en efectivo");
    
    })
})

$(function(){
    $("#mercadoPago").click(function(){
       
        alert ("seguro deseas pagar en mercado pago?");
        console.log ("paga con mercado pago");
        })
    })

    $(function(){
        $("#transferencia").click(function(){
            alert ("seguro deseas pagar con transferencia bancaria?");
            console.log ("paga en transferencia bancaria");
            })
        })



