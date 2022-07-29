// Clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    obtenerPrecio() {
        return `El precio del producto es de: $${this.precio};`
    }
}

const producto = new Producto('Monitor curvo de 40"', 800);
const producto2 = new Producto('Laptop', 100);

console.log(producto.formatearProducto());
console.log(producto2.obtenerPrecio());

// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }

    obtenerPrecio() {
        return `${super.obtenerPrecio()}`
    }
}

const libro = new Libro('JavaScript la revolución', 120, '910313981389139');

console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
