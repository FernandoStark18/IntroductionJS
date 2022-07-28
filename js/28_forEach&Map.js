const car = [
    { name: 'Monitor 20 pulgadas', price: 500 },
    { name: 'TV 50 pulgadas', price: 700 },
    { name: 'Tablet', price: 300 },
    { name: 'Audífonos', price: 200 },
    { name: 'Teclado', price: 50 },
    { name: 'Celular', price: 500 },
    { name: 'Bocinas', price: 500 },
    { name: 'Laptop', price: 800 }
];

// ForEach
console.log('ForEach\n\n');
car.forEach(producto => console.log(producto.name));

// Map
console.log('Map\n\n');
car.map(producto => console.log(producto.name));

const newArray = car.map( product => `${product.name} - ${product.price}`);
console.log(newArray);