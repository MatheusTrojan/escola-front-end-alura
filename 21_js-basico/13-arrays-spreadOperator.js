const notas = [7, 7, 8, 9];

// const novasNotas = notas  << DESSA FORMA O JS ENTENDE QUE OS DOIS SÃO LIGADOS, ENTÃO SE ADICIONAR ALGO EM UM, ALTERA NO OUTRO TAMBÉM

const novasNotas = [...notas, 10]; // ... >> SPREAD OPERATOR / OPERADOR DE ESPALHAMENTO
// após a virgula, os elementos são adicionados (pode ser antes da reticencia também para adicionar algo ao inicio do array)


console.log(`As novas notas são ${novasNotas}`)
console.log(`As notas originais são ${notas}`)