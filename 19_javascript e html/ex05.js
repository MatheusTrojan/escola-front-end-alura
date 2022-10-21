var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);


function desenhaCirculo(x, y, raio) {
    
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    
    pincel.clearRect(0, 0, 600, 400);
}

let x = 20;
let y = 20;

function atualizaTela() {
    
    limpaTela();
    desenhaCirculo(x, y, 10);
}

setInterval(atualizaTela, 20);

let esquerda = 37;
let cima = 38;
let direita = 39;
let baixo = 40;

let taxa = 10;


function leDoTeclado(evento) {

    if(evento.keyCode == cima) {

        y = y - taxa;

    } else if (evento.keyCode == baixo) {

        y = y + taxa;

    } else if (evento.keyCode == esquerda) {

        x = x - taxa;

    } else if (evento.keyCode == direita) {

        x = x + taxa;
    }
}

document.onkeydown = leDoTeclado;
