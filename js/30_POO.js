// POO

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Prototype nos permite crear funciones que solo se utilizan en un objeto en específico

Producto.prototype.formatearProducto = function() {
    return `${this.nombre} tiene un precio de: ${this.precio}`;
}
Producto.prototype.obtenerPrecio = function() {
    return `El precio es de: ${this.precio}`;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `$El Cliente {this.nombre} ${this.apellido}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const cliente = new Cliente('Fernando', 'Espericueta');

function formatearProducto(producto) {
    return `${producto.nombre} tiene un precio de: ${producto.precio}`
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());
console.log(producto2.obtenerPrecio());