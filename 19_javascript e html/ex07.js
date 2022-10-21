const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

let raio = 10


function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill()
}

function desenhaAlvo(x, y) {   
    desenhaCirculo(x, y, (raio * 3) - 5, "red")
    desenhaCirculo(x, y, raio * 2, "white")
    desenhaCirculo(x, y, raio, "red")
}

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo)
}

function limpaTela () {
    pincel.clearRect(0, 0, 600, 400)
}

let xAleatorio;
let yAleatorio;

function AtualizaTela() {
    limpaTela();
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400)    
    desenhaAlvo(xAleatorio, yAleatorio)
}

setInterval(AtualizaTela, 500)

function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if((x > xAleatorio - raio) &&
        (x < xAleatorio + raio) &&
        (y > yAleatorio - raio) &&
        (y < yAleatorio + raio)) {

        alert("acertou")
    }
}

tela.onclick = dispara
