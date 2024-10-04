function start(){
    let body = document.body
    let form = document.createElement('form');
    let input = document.createElement('input');
    let submitButton = document.createElement('input'); 

    input.type = 'text';
    input.placeholder = 'Escribe la sugerencia';
    submitButton.type = 'submit';
    submitButton.value = 'Enviar';

    form.appendChild(input);
    form.appendChild(submitButton);

    body.appendChild(form);
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let div = document.createElement('div');
        div.style.margin= "100px"
        div.style.width = "100px"
        let p = document.createElement('p');
        let buttonRemarcar = document.createElement("button")
        let buttonBorrar = document.createElement("button")

        buttonRemarcar.textContent = "REMARCAR TAREA"
        buttonRemarcar.addEventListener("click", ()=>{
            div.style.backgroundColor = "green"
        })

        buttonBorrar.textContent = "BORRAR TAREA"
        buttonBorrar.addEventListener("click", ()=>{
            div.remove()
        })


        let input = form.querySelector('input[type="text"]');
        let texto = input.value;
        p.textContent = texto

        div.appendChild(p);
        div.appendChild(buttonBorrar);
        div.appendChild(buttonRemarcar);
        body.appendChild(div);
    });
}
