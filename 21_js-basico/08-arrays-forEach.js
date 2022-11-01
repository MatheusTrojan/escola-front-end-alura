const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

// notas.forEach(function () {
//     console.log("oi")
// })

// quando uma função é passada como PARAMETRO de outra função, ela é chamada de CALLBACK
// no caso, a função anonima foi passada como parametro da função forEach
// ela foi chamada, para CADA elemento do array NOTAS

notas.forEach(function (nota, indice) {
    somaDasNotas += nota
    console.log(indice)
})

let media = somaDasNotas / notas.length

console.log(`A média das notas é ${media}.`)