export function pintarProductos(productos){

    productos.forEach(function(producto){

        // creando columnas para olajar los productos
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        // crear tarjeta para almacenar la informacion del producto
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
    
        // crear imagen 
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid", "w-100")
        imagen.src=producto.fotos[0]
    
        // crear un titulo
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
    
        // crar precio
        let precio=document.createElement("h5")
        precio.classList.add("text-center", "text-success", "fw-bold")
        precio.textContent=producto.precio

        // crea una descripcion
        let descripcion=document.createElement("p")
        descripcion.classList.add("text-center","d-none", "fw-bold")
        descripcion.textContent=producto.descripcion

        // crea subtotal
        let sub=document.createElement("h2")
        sub.classList.add("text-center")
        sub.textContent=producto.sub

        /* boton de cop
        let precioCOP=document.createElement("btn btn-outline-info")
        precioCOP.classList.add()
        precioCOP.click=cambioMoneda.precioCOP
        */

        // Detectando evento
        tarjeta.addEventListener("mouseover",function(){

            imagen.src=producto.fotos[1]
        })
        tarjeta.addEventListener("mouseleave",function(){

            imagen.src=producto.fotos[0]
        })
    
        // padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
       // tarjeta.appendChild(precioCOP)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)    
    }) 
}