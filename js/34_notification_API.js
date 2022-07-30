// Notification API maneja promises nativamente

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es: ${resultado}`))
});

if(Notification.permission == 'granted') {
    new Notification('This is a notification', {
        icon: 'img/img.jpg',
        body: 'Código con Juan, los mejores tutoriales'
    })
}