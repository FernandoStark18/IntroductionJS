// Declaracion de una Función
function sumar(numero1 = 0, numero2 = 0) {  // Parámetros de la función
    console.log(numero1 * numero2);
}

sumar(5, 10);   // Argumentos
sumar(7, 3);
sumar(8, 6);
sumar(2, 9);
sumar(12, 4);

// Expresión de la funcion 
const sumar2 = function (numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}

sumar2(8, 6);
sumar2(4, 9);
sumar2(6, 3);
sumar2(2, 7);
sumar2(3, 15);