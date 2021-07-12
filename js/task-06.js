
const inputRef = document.querySelector('#validation-input');

const inputLength = inputRef.getAttribute('data-length');

function getColor() {

    const inputLengthToNumber = Number(inputLength);

    if (inputLengthToNumber === inputRef.value.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');

    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
}

inputRef.addEventListener('blur', getColor)

