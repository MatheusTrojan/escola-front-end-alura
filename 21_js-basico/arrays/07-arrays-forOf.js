const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

// for (let elemento of notas) {
//     console.log(elemento)
// } unica expressão que passa todos elementos do array

for (let nota of notas) {
    somaDasNotas += nota
}

let media = somaDasNotas / notas.length

console.log(`A média das notas é ${media}.`)