//ajax con jquery
//
const URL_LOCAL="http://localhost:3000/users"
const URL ="https://jsonplaceholder.typicode.com/users"

$("body").append(`<button id="btn10"> Todos los clientes que nos eligieron 
este año!!</button>`)
//get local
$("#btn10").click (()=>{
     $.get(URL_LOCAL, (response, status)=>{
         if(status !=="success"){throw new error ("error")
        }
        for (const user of response)
        {
        $("#content-users").append(`<div>
        <h3>${user.name}</h3>
        </div>
        `)}
     })
}).css({'color':'red','font-size':'1.3em','background':'transparent'});

//post user
// $("body").append(`<button id="btn15"> postear usuario</button>`)

// $("#btn15").click (()=>{
//     const newUser = {"id": 5555555,
// "name": "balma",
// "lastName": "balma"}
// $.post( URL_LOCAL, newUser, (response, status)=>{
//      if (status !== "success"){throw new Error ("errrror")
//     }
//     alert("usuario creado")
// } )})
