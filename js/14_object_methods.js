"use strict";   // Correr JS en modo estricto
// Objetos
const product = {
    productName: 'Monitor 20"',
    price: 300,
    available: true
}

Object.freeze(product);

product.image = 'Image.jpg';

console.log(Object.isFrozen(product));
console.log(product);