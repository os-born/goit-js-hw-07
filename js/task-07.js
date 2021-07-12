const refs = {
    inputSizeControl: document.querySelector('input#font-size-control'),
    text: document.querySelector('span#text')
}

const fontSize = function () {
    text.style.fontSize = refs.inputSizeControl.value + 'px';
}

refs.inputSizeControl.addEventListener('input', fontSize);