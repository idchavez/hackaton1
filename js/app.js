const productos = [
    // Baloncesto
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

function agruparProductos() {
    const contenedores = document.querySelectorAll('.row-cols-1.row-cols-sm-2.row-cols-md-4.g-4.mb-5');
    if (contenedores.length < 4) return;

    const categorias = {
        baloncesto: { titulo: "🏀 Baloncesto", contenedor: contenedores[0] },
        futbol: { titulo: "⚽ Fútbol", contenedor: contenedores[1] },
        natacion: { titulo: "🏊 Natación", contenedor: contenedores[2] },
        running: { titulo: "🏃 Running", contenedor: contenedores[3] }
    };

    for (let [clave, datos] of Object.entries(categorias)) {
        if (!datos.contenedor) continue;
        datos.contenedor.innerHTML = '';
        const productosCategoria = productos.filter(p => p.categoria === clave);
        productosCategoria.forEach(producto => {
            const columna = document.createElement('div');
            columna.className = 'col';
            columna.innerHTML = `
                <div class="card h-100">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="fw-bold text-success">$${producto.precio.toLocaleString('es-CO')}</p>
                        <button class="btn btn-primary w-100 agregar-compra" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Agregar Producto</button>
                    </div>
                </div>
            `;
            datos.contenedor.appendChild(columna);
        });
    }
}

let compra = [];

function cargarCompra() {
    const guardado = localStorage.getItem('sportzone_Compra');
    if (guardado) {
        compra = JSON.parse(guardado);
    } else {
        compra = [];
    }
    actualizarContadorCompra();
    agruparCompra();
}

function guardarCompra() {
    localStorage.setItem('sportzone_Compra', JSON.stringify(compra));
    actualizarContadorCompra();
    agruparCompra();
}

function agregarCompra(id, nombre, precio) {
    const existe = compra.find(item => item.id === id);
    if (existe) {
        existe.cantidad++;
    } else {
        compra.push({ id, nombre, precio, cantidad: 1 });
    }
    guardarCompra();
    alert(`${nombre} agregado a la compra.`);
}

function eliminarDeCompra(id) {
    const index = compra.findIndex(item => item.id === id);
    if (index !== -1) {
        const nombre = compra[index].nombre;
        compra.splice(index, 1);
        guardarCompra();
        alert(`${nombre} eliminado de la compra.`);
    }
}

function actualizarContadorCompra() {
    const badge = document.getElementById('contador-Compra');
    if (badge) {
        const totalItems = compra.reduce((acc, item) => acc + item.cantidad, 0);
        badge.textContent = totalItems;
    }
}

function agruparCompra() {
    const listaCompra = document.getElementById('lista-Compra');
    const totalSpan = document.getElementById('total-Compra');
    if (!listaCompra) return;

    if (compra.length === 0) {
        listaCompra.innerHTML = '<li class="list-group-item">Tu compra está vacía</li>';
        if (totalSpan) totalSpan.textContent = '$0';
        return;
    }

    let html = '';
    let total = 0;
    compra.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${item.nombre} x ${item.cantidad}
                <span>$${subtotal.toLocaleString('es-CO')}</span>
                <button class="btn btn-danger btn-sm eliminar-item" data-id="${item.id}">Eliminar</button>
            </li>
        `;
    });
    listaCompra.innerHTML = html;
    if (totalSpan) totalSpan.textContent = `$${total.toLocaleString('es-CO')}`;

    document.querySelectorAll('.eliminar-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            eliminarDeCompra(id);
        });
    });
}

function vaciarCompra() {
    if (confirm('¿Eliminar todos los productos de la compra?')) {
        compra = [];
        guardarCompra();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    agruparProductos();
    cargarCompra();

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('agregar-compra')) {
            const id = parseInt(e.target.dataset.id);
            const nombre = e.target.dataset.nombre;
            const precio = parseInt(e.target.dataset.precio);
            agregarCompra(id, nombre, precio);
        }
    });

    const btnVaciar = document.getElementById('vaciar-Compra');
    if (btnVaciar) {
        btnVaciar.addEventListener('click', vaciarCompra);
    }
});