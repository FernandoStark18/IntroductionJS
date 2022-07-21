const product = {
    productName: "Monitor 20\"",
    price: 300,
    available: true
}

// Forma anterior
console.log("***** Forma anterior *****")
const productPrice = product.price;
const productName_ = product.productName;

console.log(`Precio del producto: ${productPrice}`);
console.log(`Nombre del producto: ${productName_}`);

// Destructuring
console.log('***** Utilizando Destructuring *****');
const {price, productName} = product;

console.log(`Precio: ${price}`);
console.log(`Nombre: ${productName}`);