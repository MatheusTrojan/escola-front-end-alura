const numeros = [100, 200, 300, 400, 500, 600];

// for (i = 0; i < numeros.length; i++) {
//     console.log(`O numero é ${numeros[i]}`)
// }

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]
}

let media = somaDasNotas / notas.length

console.log(`A média das notas é ${media}.`)