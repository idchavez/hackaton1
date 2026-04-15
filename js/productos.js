//creamos el array de objetos que seran los productos
const arrayProductos = [
   { id: 1, nombre: "Balón Profesional", precio: 120000, imagen: "assets/Balón Profesional.png", categoria: "baloncesto", descripcion: "Balón oficial de baloncesto, tamaño 7." },
    { id: 2, nombre: "Camiseta Jordan", precio: 85000, imagen: "assets/Camiseta Jordan.png", categoria: "baloncesto", descripcion: "Camiseta réplica de la leyenda del baloncesto." },
    { id: 3, nombre: "Zapatillas NBA", precio: 210000, imagen: "assets/Zapatillas NBA.png", categoria: "baloncesto", descripcion: "Zapatillas de alto rendimiento." },
    { id: 4, nombre: "Red de Baloncesto", precio: 45000, imagen: "assets/Red de Baloncesto.png", categoria: "baloncesto", descripcion: "Red resistente para cancha." },
    // Fútbol
    { id: 5, nombre: "Balón Oficial", precio: 95000, imagen: "assets/Balón Oficial.png", categoria: "futbol", descripcion: "Balón de cuero sintético, cosido a mano." },
    { id: 6, nombre: "Camiseta Selección", precio: 110000, imagen: "assets/Camiseta Selección.png", categoria: "futbol", descripcion: "Réplica oficial de la selección colombiana." },
    { id: 7, nombre: "Botines Profesionales", precio: 190000, imagen: "assets/Botines Profesionales.png", categoria: "futbol", descripcion: "Botines con tacos de aluminio." },
    { id: 8, nombre: "Espinilleras", precio: 40000, imagen: "assets/Espinilleras.png", categoria: "futbol", descripcion: "Protección anatómica de espuma." },
    // Natación
    { id: 9, nombre: "Gafas de Natación", precio: 65000, imagen: "assets/Gafas de Natación.png", categoria: "natacion", descripcion: "Antiempañantes, protección UV." },
    { id: 10, nombre: "Gorro de Baño", precio: 25000, imagen: "assets/Gorro de Baño.png", categoria: "natacion", descripcion: "Gorro de silicona, talla única." },
    { id: 11, nombre: "Traje de Baño", precio: 150000, imagen: "assets/Traje de Baño.png", categoria: "natacion", descripcion: "Traje de competición, secado rápido." },
    { id: 12, nombre: "Aletas de Natación", precio: 80000, imagen: "assets/Aletas de Natación.png", categoria: "natacion", descripcion: "Aletas cortas para entrenamiento." },
    // Running
    { id: 13, nombre: "Zapatillas Running", precio: 230000, imagen: "assets/Zapatillas Running.png", categoria: "running", descripcion: "Amortiguación y transpirabilidad." },
    { id: 14, nombre: "Camiseta Técnica", precio: 55000, imagen: "assets/Camiseta Técnica.png", categoria: "running", descripcion: "Tejido transpirable, manga corta." },
    { id: 15, nombre: "Pantalones Cortos", precio: 45000, imagen: "assets/Pantalones Cortos.png", categoria: "running", descripcion: "Con bolsillo para llaves." },
    { id: 16, nombre: "Gorra Deportiva", precio: 35000, imagen: "assets/Gorra Deportiva.png", categoria: "running", descripcion: "Ajustable, absorbe el sudor." }
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
                    <button class="btn btn-primary w-100 btn-agregar" 
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