const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}

refs.input.addEventListener('input', (name) => {
    refs.output.textContent = name.currentTarget.value||'незнакомец'}
)
