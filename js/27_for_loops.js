// For Loop

for ( let i = 0; i <= 100; i++ ) {
    if ( i % 2 == 0 ) {
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es IMPAR`);
    }
}

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

for ( let i = 0; i <= car.length; i++) {
    console.log(car[i].name);
}