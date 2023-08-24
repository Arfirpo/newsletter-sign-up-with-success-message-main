const email = document.querySelector('.form__email');
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = document.querySelector('form');
const error = document.querySelector('#error');
const card = document.querySelector('.card');
const success = document.querySelector('#success');
const container = document.querySelector('main');
const none = document.querySelector('.none');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value !== ' ') {
        if (regex.test(email.value)) {
            card.style.display = 'none';
            success.style.display = 'flex';
        } else {
            error.style.display = 'block';
        }
    } else {
        error.style.display = 'flex';
    }   
});

