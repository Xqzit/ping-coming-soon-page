const email = document.querySelector('form #email');
const notifyBtn = document.querySelector('form .button');
const re = /^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const validate = document.querySelector('form div');

notifyBtn.addEventListener('click', () => {
    if (!re.test(email.value)) {
        email.classList.add('invalid');
        validate.classList.add('validate');
        validate.innerHTML = 'Please provide a valid email address';
    } else {
        email.classList.remove('invalid');
        validate.classList.remove('validate');
    }
});