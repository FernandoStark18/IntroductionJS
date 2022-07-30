const userAuthenticated = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado');
    } else {
        reject('No se pudo iniciar sesion');
    }
});

console.log(userAuthenticated);
userAuthenticated
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
