
const input = document.querySelector('#validation-input');

const inputLength = input.getAttribute('data-length');

function getColor() {
    const inputLengthToNumber = Number(inputLength);

    if (inputLengthToNumber === input.value.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');

    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}

input.addEventListener('blur', getColor)

