// Array methods

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const car = [
    { name: 'Monitor 20 pulgadas', price: 500 },
    { name: 'TV 50 pulgadas', price: 700 },
    { name: 'Tablet', price: 300 },
    { name: 'Audífonos', price: 200 },
    { name: 'Teclado', price: 50 },
    { name: 'Celular', price: 500 },
    { name: 'Bocinas', price: 500 },
    { name: 'Laptop', price: 300 },
    { name: '', price: 800 }
];

// foreach

months.forEach(function (month) {
    console.log(month);
    if (month == 'Marzo') {
        console.log('Marzo sí existe');
    }
});

// Includes
const resultado = months.includes('Marzo');
const resultado2 = car.some(function (product) {
    return product.name == 'Celular'
});
console.log(resultado);
console.log(resultado2);

// Reduce
resultado3 = car.reduce(function (total, producto) {
    return total + producto.price
}, 0);
console.log(resultado3);

// filter
resultado4 = car.filter(function(producto){
    return producto.price > 400
});
console.log(resultado4);

resultado4 = car.filter(function(producto){
    return producto.name === 'Celular'
});
console.log(resultado4);