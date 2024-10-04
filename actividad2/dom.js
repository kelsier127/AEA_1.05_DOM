function ejercicio2(){
    let body = document.body;

    let div = document.createElement("div");
    div.textContent= "Esto es un div";

    body.appendChild(div)

    div.addEventListener("click", () => {
        div.style.backgroundColor = obtenerColorAleatorio();
        const nuevoAncho = Math.random() * 200 + 50; 
        const nuevoAlto = Math.random() * 200 + 50; 
        div.style.width = nuevoAncho + 'px';
        div.style.height = nuevoAlto + 'px';

    })
}

function obtenerColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function obtenerMedidaAleatorio(){
    function obtenerNumeroAleatorio() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}