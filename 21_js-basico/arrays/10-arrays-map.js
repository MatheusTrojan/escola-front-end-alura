const notas = [10, 9.5, 8, 7, 6];

const notasFinal = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
})

// console.log(notasFinal)

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesPadronizados = nomes.map((nome) => {
//     return nome.toUpperCase()
// }) QUANDO A ARROW FUNCTION APENAS RETORNA UM VALOR, PODEMOS ESCREVER ELA SEM O RETURN E AS CHAVES \/ 

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase())

console.log(nomesPadronizados)