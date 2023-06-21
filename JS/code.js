// Clase molde para los productos de la tienda
class Producto {
    constructor(nombre, cantidad, precio, imagen){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.imagen = imagen;
    }
}
//Variables globales
const carrito = [];


// Productos de la tienda
const piano = new Producto("Piano", 1, 1200, "piano.png");
const guitarraElectrica = new Producto("Guitarra Electrica", 1, 800, "guitarra-electrica.png");
const guitarraAcustica = new Producto("Guitarra Acustica", 1, 200, "guitarra-acustica.png");
const bateria = new Producto("Bateria", 1, 1000, "bateria.png");
const ukulele = new Producto ("Ukulele", 1, 250, "ukulele.png");
const saxophone = new Producto("Saxophone", 1, 600, "saxophone.png");

let dinero = 3000;

//ELementos
const elementoDinero = document.querySelector("#dinero");
const elementoCarrito = document.querySelector("#carrito");
elementoDinero.innerText = dinero;



function comprar(producto) {
    if (dinero - producto.precio <= -1){
        alert("No tienes suficiente dinero para comprar " + producto.nombre);
        return;
    } else {
        carrito.push(producto);
        dinero = dinero - producto.precio;
        actualizarHTML();
    }
}

//Funciones
function vender(indice) {
    const producto = carrito[indice];
    dinero = dinero + producto.precio;
    carrito.splice(indice, 1);
    actualizarHTML();
}


function actualizarHTML(){
    elementoCarrito.innerHTML = "";
    for (const Producto of carrito){
        let indiceProducto = carrito.indexOf(Producto);
        let elementoProducto = `
            <div class="producto" onclick="vender(${indiceProducto})">
                <img src="img/${Producto.imagen}" width="20%" />
            </div>`;
        elementoCarrito.innerHTML += elementoProducto;
    }
    elementoDinero.innerText = dinero;
}
