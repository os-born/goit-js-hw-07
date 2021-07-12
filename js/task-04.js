
let counterValue = 0;

const refs = {
    increment: document.querySelector('[data-action="increment"]'),
    decrement: document.querySelector('[data-action="decrement"]'),
    valueOfCounter: document.querySelector('#value')
}

const onClickIncrement = function () {
    counterValue += 1;
    refs.valueOfCounter.textContent = counterValue;
}

const onClickDecrement = function() {
    counterValue -= 1;
    refs.valueOfCounter.textContent = counterValue;
}

refs.increment.addEventListener('click', onClickIncrement);
refs.decrement.addEventListener('click', onClickDecrement);