// For Loop

console.log('FOR LOOP \n\n');
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
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

for (let i = 0; i < car.length; i++) {
    console.log(car[i].name);
}

// While Loop

console.log('WHILE LOOP \n\n');
let i = 0;

while (i <= 10) {
    if (i % 2 == 0) {
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es IMPAR`);
    }
    i++;
}

i = 0;
while (i < car.length) {
    console.log(`Artículo ${i + 1}: ${car[i].name}`);
    i++;
}

// Do while Loop

console.log('DO WHILE LOOP\n\n');
i = 0;
do {
    if (i % 2 == 0) {
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es IMPAR`);
    }
    i++;
} while (i <= 10);

i = 0;
do {
    console.log(`Artículo ${i + 1}: ${car[i].name}`);
    i++;
} while (i < car.length);
