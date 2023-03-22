import{productos} from "../helpers/baseDatos.js"
import { pintarProductos } from "../helpers/pintarProductos.js"


// llamando a la fila
let fila=document.getElementById("fila")

// pintar productos de la tienda
pintarProductos(productos)

//Escuchar click en la fila contenedora del producto
fila.addEventListener("click",function(evento){

    let datosProductoSeleccionado={}
    let tarjeta=evento.target.parentElement
    datosProductoSeleccionado.foto=tarjeta.querySelector("img").src
    datosProductoSeleccionado.nombre=tarjeta.querySelector("h3").textContent
    datosProductoSeleccionado.precio=tarjeta.querySelector("h5").textContent
    datosProductoSeleccionado.descripcion=tarjeta.querySelector("p").textContent
    //datosProductoSeleccionado.cambioMoneda=tarjeta.querySelector("button").textContent

   // usaremos la memoria del pc para guardar esta info
   localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionado))
    
    window.location.href="./SRC/views/ampliarinfo.html"
})
