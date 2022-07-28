const reservacion = {
    nombre: 'Fernando',
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Simón',
    apellido: 'Espericueta',
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

console.log(reservacion.informacion());
console.log(reservacion2.informacion());