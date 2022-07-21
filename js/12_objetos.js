// Objetos

const product = {
    productName: "Monitor 20\"",
    price: 300,
    available: true
}

console.log(product);

// console.log(`Nombre del producto: ${product.productName}, Precio: ${product.price}, Disponibilidad: ${product.available}`);

// Agregar propiedades
product.image = "image.jpg";
console.log(product);

// Eliminar propiedades
delete product.available;
console.log(product);