let notas =  [10, 6, 8, 7]; // declara o array 

notas.push(7) //adiciona uma nota ao array

notas.pop(); //remove o ultimo elemento do array


// nova variavel       acessando notas pelo indice    comprimento total do array notas
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length 

console.log(`A média é ${media}`)