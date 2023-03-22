// llamo a la memoria para acceder a los datos guardados
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)

let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let nombre=document.getElementById("nombre")
nombre.textContent=infoProducto.nombre

let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio 

//CONFIGURACION DEL CARRITO
let infoCarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito
let contador=document.getElementById("contador")

if(infoCarrito != null){
    carrito=infoCarrito
    contador.textContent=carrito.length

}else{
    carrito = []
}

let botonAgregarProducto=document.getElementById("btn-agregarCarrito")

botonAgregarProducto.addEventListener("click",function(){
    carrito.push(infoProducto)
    contador.textContent=carrito.length
    localStorage.setItem("carrito", JSON.stringify(carrito))

        // ELIMINAR PRODUCTOS
    let btnVaciar=document.getElementById("btn_Eliminar")
    btnVaciar.addEventListener("click", function(){
        carrito=[]
        contador.textContent=carrito.length
    })

    
    //CONFIGURACION DEL SUBTOTAL
    let cantidad=document.getElementById("cantidadProductos").value
    let preciounitario=infoProducto.precio.split("USD ")[1]
    
    let total=cantidad*preciounitario
    document.getElementById("resultado").innerHTML= "El toatl es: $" +cantidad*preciounitario +" USD";
    return preciounitario

    //CONFIGURACION DE USD a COP

      function cambio(){ 
        let pesoCop = 4.848;
        let totalDolare = preciounitario;

        if (isNaN(totalDolare)){
            console.log("total en pesos invalido: " +totalDolare);
            alert("error")

        }else{
            let totalpesos = totalDolare / pesoCop;
            console.log("total en Pesos Colombiano: "+totalpesos);
            document.getElementById("cambioencop").innerHTML = "Total en COP: "+totalpesos.toFixed(2);
        }  
        btn_Eliminar.addEventListener("click", cambio())
     }
     
})






    

/*
//Eliminar carrito
const eliminarCarrito=JSON.parse(localStorage.getItem("carrito"))
const listaCarrito = document.getElementById("carrito")

function eliminarArticulos(infoProducto)
carrito.splice(carrito)
actualizarCarrito();
                    
function actualizarCarrito(){
    listaCarrito.innerHTML=""
    carrito.forEach(carrito)
}
*/









