const listaDeTeclas = document.querySelectorAll('input[type=button]');

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador]; 

    tecla.onkeydown = function (evento) {
        console.log(evento.code)
    }
} 