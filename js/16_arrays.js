// Arrays are objects

const numbers = [10, 20, 30, 40, 50];
console.table(numbers);

const months = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
console.table(months);

// const array = ['Hi', 10, true, 'Sí', null, {nombre: 'Fernando', trabajo: 'Programador'}, [1, 2, 3]];

// console.log(`Var: ${numbers} Type: ${typeof numbers}`);
// console.log(`Var: ${months} Type: ${typeof months}`);
// console.log(array);

// // Acceder a valores de un arreglo
// console.log(numbers[4]);

// // Conocer la extensión de un arreglo
// console.log(numbers.length);

// numbers.forEach( function(number){
//     console.log(number);
// })

numbers[5] = 60;
numbers[6] = 70;
console.table(numbers);

numbers.push(80);
numbers.push(80,100,110);
numbers.unshift(-10, -20, -30);
console.table(numbers);

months.pop();
months.shift();
months.splice(2, 1);
console.table(months);

const newArray = [ ...months, 'Jupiter'];
console.table(newArray);
