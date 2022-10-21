const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

pincel.fillStyle = "grey"
pincel.fillRect(0, 0, 600, 400)
const cores = ["blue", "red", "green"]
let indiceCores = 0
let raio = 10

let desenha = false;


tela.onmousemove = function(evento) {

    if (desenha) {

        let cor = document.getElementById("cor").value
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        
        pincel.fillStyle = cor;  
        
        pincel.beginPath();
        if (evento.shiftKey && raio <= 39) {
            raio = raio + 1 
        }
        
        if (evento.altKey && raio >= 11) {
            raio = raio - 1 
        }        
        pincel.arc(x, y, raio, 0, 6.18);          
        pincel.fill();
    }        
}

tela.onmousedown = function() {
    desenha = true;
}
tela.onmouseup = function() {
    desenha = false;
}

// function mudaCor() {
//     indiceCores ++;
//     if (indiceCores >= cores.length) {
//         indiceCores = 0;
//     }
//     return false;
// }

// //botao esquerdo do mouse para acionar o mudaCor
// tela.oncontextmenu = mudaCor;