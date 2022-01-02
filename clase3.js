/*
//let nombre= "nombre";
//let apellido= "apellido";
//let edad= "edad";
//let email= "email";
//let direccion= "direccion";
//let telefono = "telefono";


class Usuario {
 //metodo constructor de una clase
    constructor(nombre , apellido , edad, 
        email, direccion, telefono)
{this.nombre=nombre ;
    this.apellido=apellido ;
    this.edad=edad ;
    this.email=email ;
    this.direccion=direccion ;
    this.telefono= telefono;
}
}



console.log (Usuario)
*/
  
 /**********************************


   const usuario ={nombre: prompt ("ingresar nombre"),
    apellidio: prompt ("ingresar apellido"),
    edad: prompt ("ingresar edad"),
    email:  prompt ("ingresar email"),
    direccion: prompt ("ingresar direccion"),
    telefono: prompt ("ingresar telefono"),
}
 console.log (usuario)

 usuario.nacionalidad = "checoslovaco"//o cualquier info que quiera modificar, incluso con prompt
 console.log (usuario.nombre)
 delete usuario.nacionalidad //borre nacionalidad con "delete"
**********************************/
 function createUser (nombre , apellido , edad, email, direccion, telefono){
    console.log ("se creo el usuario " + email)
    console.log ("con el nombre: " +nombre )
    console.log ("apellido: "+apellido ) 
    console.log ("edad: "+ edad)
    console.log ("con direccion en: " + direccion)
    console.log ("celular: "+ telefono)

    
if (edad > 18) 
{alert ("hola "+ nombre + " " + apellido)}
else {(edad < 18)
    console.log ("menor de edad")
alert("credenciales invalidas: contraseña o edad inapropiados")
throw new Error("ACCESO DENEGADO");
  
}}

createUser (nombre = prompt ("1/6 cual es tu nombre"),
apellido = prompt ("2/6 apelllido"),
edad = prompt ("3/6 edad"),
email= prompt ("4/6 email"),
direccion= prompt ("5/6direccion"),
telefono= prompt ("6/6 telefono"))

function Usuario (nombre , apellido , edad, 
    email, direccion, telefono)
    {   this.nombre= nombre;
    this.apellido= apellido;
    this.edad= edad;
    this.email= email;
    this.direccion= direccion;
    this.telefono= telefono;
}


const pers1 = new Usuario (nombre , apellido , edad, 
    email, direccion, telefono);
console.log (pers1)



 