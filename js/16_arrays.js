// Arrays are objects

const numbers = [10, 20, 30, 40, 50];
const months = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
const array = ['Hi', 10, true, 'Sí', null, {nombre: 'Fernando', trabajo: 'Programador'}, [1, 2, 3]];

console.log(`Var: ${numbers} Type: ${typeof numbers}`);
console.log(`Var: ${months} Type: ${typeof months}`);
console.log(array);

// Acceder a valores de un arreglo
console.log(numbers[4]);

// Conocer la extensión de un arreglo
console.log(numbers.length);

numbers.forEach( function(number){
    console.log(number);
})