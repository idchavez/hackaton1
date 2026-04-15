

















































































































































































































let cantidadProductos = 0;
let precioTotal = 0;
let clave = "cuardarLista";

let carrito = obtenercarrito(); // trae los datos en json

carrito.forEach(function(producto){
    pintarCarrito(producto.nombre, producto.precio)

})

actilizarCarrito();
actulizarPrecioTotal();

let botonAgregar = document.querySelectorAll(".btn-agregar");

botonAgregar.forEach(function(boton){   // recorre cada boton 
    boton.addEventListener("click", function(){
        let nomobre = boton.dataset.nombre;
        let precio = Number(boton.dataset.precio);



        agregarAlcarrito(nomobre, precio)// funcion agragar al cariito esta afuera porque ete evento solo escucha y trae los datos

    })
})


// funcion de agregar procductos al carrito
function agregarAlcarrito(nombre, precio){
    let producto = { nombre, precio};

    carrito.push(producto); // en carrito ingresa los tados 
    guardarCarrito(carrito); // lla la funcio para ingrsa los dato


    let lista = document.createElement("li"); // crea la lista
    lista.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    

    let  botonEliminar = document.createElement("button"); // crea mos el boton 
    botonEliminar.textContent = "x";
    botonEliminar.classList.add("botonEliminar"); // creamos una clace boton eliminar prque ese boton elimina ese continido
     
    lista.textContent = nombre + " $ " + precio; // en la linta agregamons los datos
    lista.appendChild(botonEliminar); // agregamos boton eliminar por que deve apareser en cada pruducto

    let listaCarrito = document.getElementById("lista-carrito"); // trae el elemento para ingresar datos
    listaCarrito.appendChild(lista); // sele agrega la lista creada

    // evento de boton elimar el que tiene la lista
    botonEliminar.addEventListener("click", function(){
         eliminarProducto(lista, precio, nombre); // esta fucion se hace afuera proque el producto debe esistir para elimar

    });

    cantidadProductos++; // ingrementa pritutos
    precioTotal += precio; // suma su precio con el que ya tiene

    actilizarCarrito(); // actualiza el contado lo llamo porque debe cambiar en contador con o que estoy ingresando
    actulizarPrecioTotal();

    document.getElementById("mensageVacio").style.display = "none";


}



// funcion eliminar producto
function eliminarProducto(li, precio, nombre){
    li.remove(); // elimina la lista creada del documento

    let index = carrito.findIndex(producto => 
        producto.nombre === nombre && producto.precio === precio
    );

    if (index !== -1) {
        carrito.splice(index, 1);
    }

    guardarCarrito(carrito);

    cantidadProductos--; 
    precioTotal -= precio;

    actilizarCarrito();
    actulizarPrecioTotal()

    if (carrito.length === 0) {
        document.getElementById("mensageVacio").style.display = "block";
    }

}

// funcion actializar carrito
function actilizarCarrito(){
    let contadorCorrito = document.getElementById("contadorCorrito");
    contadorCorrito.textContent = cantidadProductos;
}


// funcion actializar precio total
 function actulizarPrecioTotal(){
    let  contadorPrecioTotal = document.getElementById("precioTotal");
    contadorPrecioTotal.textContent = "$" + precioTotal.toLocaleString('es-CO', {minimumFractionDigits: 2}); // Muestra un número como dinero colombiano en pantalla

 }



// vaciar carrito

   let vaciarCarrito = document.getElementById("botonVaciar");

    vaciarCarrito.addEventListener("click", function(){
    let listaEliminar = document.getElementById("lista-carrito");

    listaEliminar.querySelectorAll("li:not(#mensageVacio)").forEach(li => li.remove()); // recorre la lista y  elimina toda la lista completa
    document.getElementById("mensageVacio").style.display = "block"; // muetra el mensage al elimar toda la lista


    cantidadProductos = 0; // se pone en cero el contador del cariito porque ya no hay productos
    precioTotal = 0; // se pone en cero el precio porque ya no hay productos que sumar
    carrito = [];
    guardarCarrito(carrito)

    actilizarCarrito()// actualiza el contado lo llamo porque debe cambiar en contador con o que estoy ingresando
    actulizarPrecioTotal()

})

// guarda en el localstorage
function guardarCarrito(carrito){
    localStorage.setItem(clave, JSON.stringify(carrito));

}



// fucion otiene los datos y los conbiete en json
function obtenercarrito(){ 
    let datosProdutos = localStorage.getItem(clave);

    if (datosProdutos === null){ // regresa una cadena vacia si no hay datos para que no rompa el codigo 
        return [];
    }
    return JSON.parse(datosProdutos); // los combierte en json

}



function pintarCarrito(nombre, precio){

    let lista = document.createElement("li");
    lista.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "x";
    botonEliminar.classList.add("botonEliminar");

    lista.textContent = nombre + " $ " + precio;
    lista.appendChild(botonEliminar);

    let listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.appendChild(lista);

    botonEliminar.addEventListener("click", function(){
        eliminarProducto(lista, precio, nombre);
    });

    cantidadProductos++;
    precioTotal += precio;
}
    document.getElementById("card-fuchibol").addEventListener("click", function(){
        document.getElementById("fuchibol").scrollIntoView();
    });

    document.getElementById("card-baloncesto").addEventListener("click", function(){
        document.getElementById("baloncesto").scrollIntoView();
    });

    document.getElementById("card-running").addEventListener("click", function(){
        document.getElementById("running").scrollIntoView();
    });

    document.getElementById("card-natacion").addEventListener("click", function(){
        document.getElementById("natacion").scrollIntoView();
    });
