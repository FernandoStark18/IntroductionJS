const metodoPago = 'cheque';

switch(metodoPago) {
    case 'tarjeta': 
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario va apagar con cheque, revisaremos los fondos primero');
        break;
    case 'efectivo': 
        console.log('Pagaste con efectivo');
        break;
    default: 
       console.log('Aún no has pagado');
        break;
}