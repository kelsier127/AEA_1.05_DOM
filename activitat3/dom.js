function start(){
    let body = document.body
    const form = document.createElement('form');
    const input = document.createElement('input');
    const submitButton = document.createElement('input');



    input.type = 'text';
    input.placeholder = 'Escribe algo';
    submitButton.type = 'submit';
    submitButton.value = 'Enviar';

    form.appendChild(input);
    form.appendChild(submitButton);

    body.appendChild(form);
    

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const p = document.createElement('p');
        const input = form.querySelector('input[type="text"]');
        const text = input.value;

        p.textContent = text;
        body.appendChild(p);
    });
}
