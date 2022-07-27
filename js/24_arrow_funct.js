// Arrow Functions

const sumar = function (n1, n2) {
    console.log(n1 + n2);
}
sumar(5, 10);

const sumar2 = (n1, n2) => {
    console.log(n1 + n2);
}
sumar(15, 10);

const sumar3 = (n1, n2) => console.log(n1 + n2);
sumar(25, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

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
months.forEach( month => {
    if (month == 'Marzo') {
        console.log('Marzo sí existe');
    }
});

// Includes
const resultado = car.some( product => product.name === 'Celular');
console.log(resultado);

// Reduce
resultado2 = car.reduce( (total, producto) => total + producto.price, 0);
console.log(resultado2);

// filter
resultado3 = car.filter( (producto) => producto.price > 400);
console.log(resultado3);

resultado4 = car.filter( (producto) => producto.name === 'Celular');
console.log(resultado4);

// ***** En las Arrow function el return está implícito *****