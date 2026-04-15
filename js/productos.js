//creamos el array de objetos que seran los productos
const arrayProductos = [
    { id: 1, nombre: "Ba", categoria:" ffef", precio: 80000, img: "Run-" },
    { id: 2, nombre: "Gafn", precio: 45000, img: "n" },
    { id: 3, nombre: "Zaing", precio: 120000, img: "ru" }
];

const contenedorProductos = document.getElementById("contenedor-productos");

function renderizarProductos(lista) {
   
    contenedorProductos.innerHTML = "";

    // Recorremos el array para que nos cree la tarjeta de cada producto
    lista.forEach((producto) => {
       
        const tarjeta = document.createElement("div");
        tarjeta.className = "col";
        
        tarjeta.innerHTML = `
            <div class="card h-100">
                <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-tex">${producto.categoria}</p>
                    <p class="fw-bold text-success">$${producto.precio.toLocaleString()}</p>
                    <button class="btn btn-primary w-100" 
                id="btn-${producto.id}"
                data-nombre="${producto.nombre}" 
                data-precio="${producto.precio}">
                Agregar Producto
                    </button>
                </div>
            </div>
        `;

       //Se agrega la tarjeta al contenedor
        contenedorProductos.appendChild(tarjeta);

       
   
    });
}//Llamamos a la funcion para que nos renderice todo el array
renderizarProductos(arrayProductos);