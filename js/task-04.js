
let counterValue = 0;

const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');
const numberOfCounterRef = document.querySelector('#value');

const onClickIncrement = function () {
    counterValue += 1;
    numberOfCounterRef.textContent = counterValue;
}

const onClickDecrement = function() {
    counterValue -= 1;
    numberOfCounterRef.textContent = counterValue;
}

incrementRef.addEventListener('click', onClickIncrement);
decrementRef.addEventListener('click', onClickDecrement);