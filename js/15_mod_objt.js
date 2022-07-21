const product = {
    productName: 'Monitor 20"',
    price: 300,
    available: true
};

const measures = {
    weight: '1kg',
    length: '1m'
};

// Spread operator
const newProduct = { ...product, ...measures };

console.log(product);
console.log(newProduct);