// >>>>>>>>>>>>>>> concatenando arrays

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaJS.concat(salaPython); // une o array do parenteses para o primeiro (cria novo array)

// console.log(salasUnificadas)

// >>>>>>>>>>>>>>>> lista com 2 dimensões

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias]

console.log(`A aluna na posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
A media dessa aluna é ${listaDeAlunosEMedias[1][1]}`) 

// listaDeAlunosEMedias contem 2 arrays e aqui estamos acessando 1 por vez através do indice.