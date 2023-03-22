// quemar o configurar una base de datos

// Configuracion del arreglo
/* tido arreglo y todo objeto son variables*/

export let productos=Array(
    {
        // escribimos el atributo en este caso nombre.
        nombre:"Nike Dunk Low SE 'Just Do It'",
        descripcion:"Desde los colores hasta el colgante que rinde homenaje a la mujer en el deporte, el ícono de los años 80 regresa con detalles clásicos y un toque de básquetbol retro. La zona del tobillo acolchada de corte low te permite ir cómodamente a cualquier parte.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/dunkSE1.jpg?alt=media&token=514224dc-2617-40ea-a925-308c5ecab87b","https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/dunkSE2.jpg?alt=media&token=e63b6a5e-83e6-4b0d-8e50-3edbd12da585"],
        precio:"USD 180",
        popularidad:4.5,
        
    },

    {
        nombre:"Nike Dunk Low SE RED 'Just Do It'",
        descripcion:"Una versión más premium de la silueta, cuenta con una parte superior de cuero blanco con superposiciones de color rojo. El punto focal se dirige al lujoso hardware dorado ubicado en el cordón, junto con 'Just Do It' y números romanos que leen 2023",
        fotos:["https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Ddunkrojo1.jpg?alt=media&token=3655b713-a291-4f75-b7c7-2af5f7125c39","https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/dunkrojo2.jpg?alt=media&token=45f4772a-0db4-49ce-b000-55f9c572675d"],
        precio:"USD 200",
        popularidad:4.5,
        
    },

    {
        nombre:"Nike Dunk Low SE 'Just Do It' High",
        descripcion:"El icono del baloncesto de los 80, creado para la cancha y adaptado al estilo urbano, vuelve con piel impecable y colores retro. Su diseño clásico de baloncesto lleva de nuevo el estilo vintage de los 80 a las calles, y su zona del tobillo de perfil alto y acolchada incorpora un look clásico y ofrece comodidad.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Nike%20Dunk%20Low%20SE%20'Just%20Do%20It'1.jpg?alt=media&token=a159a648-dad0-4e79-b4d8-b008f7549369","https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Nike%20Dunk%20Low%20SE%20'Just%20Do%20It'2.jpg?alt=media&token=f1c29d7a-9c49-441a-9fe7-449e1f2f6a89"],
        precio:"USD 210",
        popularidad:4.5,
        
    },

    {
        nombre:"Nike Blazer Low '77 Vintage",
        descripcion:"Con lujosos detalles de gamuza, un diseño Swoosh retro y un cuello supersuave, los Nike Blazer Low '77 Vintage son un básico imprescindible.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Nike%20Blazer%20Low%20'77%20Vintage1.jpg?alt=media&token=9cfae550-0b5f-45b5-9f9f-798e32415dd4","https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Nike%20Blazer%20Low%20'77%20Vintage2.jpg?alt=media&token=0a6be22b-fece-4c03-ab3a-cea54fbb0528"],
        precio:"USD 120",
        popularidad:4.5,
        
    },

    {
        nombre:"Air Jordan 1 Mid 'Stealth'",
        descripcion:"Este par viene en una sutil combinación de colores en dos tonos Sail White y Stealth Grey confeccionados con cuero",
        fotos:["https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Women'sAirJordan1Mid%20Stealth'1.jpg?alt=media&token=c6093414-1494-4a73-9a60-c0ad029ca02e","https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Women's%20Air%20Jordan%201%20Mid%20'Stealth'2.jpg?alt=media&token=5da129bc-11a3-45e5-99cb-aa5fa13a0d28"],
        precio:"USD 200",
        popularidad:4.5,
        
    },

    {
        nombre:"Air Jordan 5 Retro 'Gore-Tex'",
        descripcion:"Inspirándose en la ropa tecnológica, el Air Jordan 5 GORE-TEX 'Off-Noir' es la combinación perfecta de estilo y funcionalidad.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Air%20Jordan%205%20Retro%20'Gore-Tex'1.jpg?alt=media&token=bfb85d26-68c8-4634-8b09-6756665751bc","https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Air%20Jordan%205%20Retro%20'Gore-Tex'2.jpg?alt=media&token=ecd75bf7-5558-4572-a7fa-624a73bf6b05"],
        precio:"USD 240",
        popularidad:4.5,
        
    },

    {
        nombre:"Air Jordan 4 Retro Craft G/S 'Photon Dust'",
        descripcion:"En estos Air Jordan 4 Retro SE  'G/S' el 'Photon Dust' desempeña el papel principal en la parte superior de cuero y gamuza. Toques de gris y blanco roto entran en la mezcla en roles secundarios, con el color anterior cubriendo el componente de la marca Jumpman.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/AirJordan41.jpg?alt=media&token=152065cf-e8c5-4037-b044-a16561c1e609","https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/AirJordan42.jpg?alt=media&token=44cec0db-ac15-446f-89ac-89639f9e8bac"],
        precio:"USD 205",
        popularidad:4.5,
       
    },

    {
        nombre:"New Balance 550 'Grey Suede'",
        descripcion:"Luciendo un esquema de color oficial de 'Rain Cloud/Sea Salt-White', la parte superior baja se compone de su composición exclusiva de cuero, malla y gamuza que cubre su parte superior.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/NewBalance1.jpg?alt=media&token=f9469f5d-4da1-4ac1-abb2-8b2aa57ae838","https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/NewBalance2.jpg?alt=media&token=b8181bec-94d9-48e6-bc74-01711dea6324"],
        precio:"USD 190",
        popularidad:4.5,
        
    },

    {
        nombre:"adidas Adilette 22 Slides",
        descripcion:"Inspiradas en la topografía 3D y las expediciones humanas a Marte, desafían la gravedad con detalles de diseño futurista. Seriamente cómodos, están listos para la vida en el planeta rojo.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/adidas%20Adilette%2022%20Slides1.jpg?alt=media&token=f4c4e0f6-0671-4236-9313-55de34a1f60e","https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/adidas%20Adilette%2022%20Slides2.jpg?alt=media&token=2ae89727-0238-4a92-add0-a6ffe77af224"],
        precio:"USD 230",
        popularidad:4.5,
        
    },

    {
        nombre:"Adidas adifom Q 'Black Carbon'",
        descripcion:"Zapatillas Adifom con exterior de espuma envuelven tus pies con comodidad",
        fotos:["https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Adidas%20adifom%20Q%20'Black%20Carbon'1.jpg?alt=media&token=44e6c272-2dc9-48cc-a97e-ff1154718b03","https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Adidas%20adifom%20Q%20'Black%20Carbon'2.jpg?alt=media&token=e37b4ba8-5e7c-4582-8b5a-f9b4c35e7b2b"],
        precio:"USD 180",
        popularidad:4.5,
        
    }
)
