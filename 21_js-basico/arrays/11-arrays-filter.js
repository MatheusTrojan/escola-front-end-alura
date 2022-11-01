const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// filter retorna verdadeiro/falso para decidir se o aluno vai ser incluído na lista de reprovados ou não 
const reprovados = alunos.filter((_, indice) => { // utilizar o underline para "Nomear" um parametro que nao vamos utilizar
    return medias[indice] < 7; // retorna apenas os indices onde a media ficou menor que 7, e inclui o aluno correspondente na lista de reprovados
})

console.log(reprovados)