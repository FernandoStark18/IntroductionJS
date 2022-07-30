// Async / await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

async function app() {
    try {
        const resultado = await descargarNuevosClientes(); // El await se coloca justo antes de donde se encuentra el promise
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este código no se bloquea');