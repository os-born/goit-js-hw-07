
const inputRef = document.querySelector('#validation-input');

const inputLength = input.getAttribute('data-length');

function getColor() {

    const inputLengthToNumber = Number(inputLength);

    if (inputLengthToNumber === input.value.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
        
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
}

inputRef.addEventListener('blur', getColor)

