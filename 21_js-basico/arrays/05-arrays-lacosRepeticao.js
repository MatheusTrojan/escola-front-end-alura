const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias]

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) { // includes > verifica se o array inclui o parametro passado

        // const alunos = listaDeAlunosEMedias[0]
        // const medias = listaDeAlunosEMedias[1]

        const [alunos, medias] = listaDeAlunosEMedias // maneira simplificada de criar 2 consts distintas (listaDeAlunosEMedias[0] e [1])

        const indice = alunos.indexOf(aluno); // indexOf > encontra o indice do paramentro passado
        
        const mediaDoAluno = medias[indice]

        console.log(`${aluno} tem a média ${mediaDoAluno}`);

    } else {
        console.log("Aluno não encontrado!")
    }
}

exibeNomeENota("Juliana")