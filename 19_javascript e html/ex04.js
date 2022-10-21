const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill()
}

function limpaTela () {
    pincel.clearRect(0, 0, 600, 400)
}

let x = 30
let y = 30
let sentido = 1
let sentidoVertical = 1
let raio = 10
let crescimento = 0

function atualizaTela() {

    limpaTela()

    if (x > 585) {
        sentido = -1
    } else if (x < 15) {
        sentido = 1
    }
    x = x + sentido

    if (y > 385) {
        sentidoVertical = -1
    } else if (y < 15) {
        sentidoVertical = 1
    }
    y = y + sentido


    if (raio > 30) {
        crescimento = -1;
    } else if (raio < 15) {
        crescimento = 1
    }
    raio = raio + crescimento



    desenhaCirculo(x, y, raio);

}

// setInterval(atualizaTela, 10)

