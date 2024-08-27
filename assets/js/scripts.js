const form = document.getElementById('contact-form');
const message = document.getElementById('message');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    message.textContent = 'Mensaje enviado exitosamente';
    message.classList.remove('d-none');
    form.reset();

    setTimeout(() => {
        message.classList.add('d-none');
    }, 2000);

    setTimeout(() => {
        const contact = document.getElementById('contact');
        contact.remove();
    }, 2000);

});
