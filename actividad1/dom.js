function startFunction(){
        let boton = document.querySelector("button")
        let titulo = document.querySelector("h1")
        let parrafo = document.querySelector("p")
        let lista = document.querySelector("ul")
        
        console.log(titulo)
        console.log(parrafo)
        console.log(lista)
        console.log(boton)

        boton.addEventListener("click", () =>{
            titulo.textContent = "Esto es el nuevo titulo"
            parrafo.textContent = "El parrafo tambien ha sido cambiado"

            let nuevoElemento = document.createElement("li")

            nuevoElemento.textContent = `Nuevo Elemento`

            lista.appendChild(nuevoElemento)
        })
}