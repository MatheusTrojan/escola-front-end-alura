const nomes = ["José", "Maria", "João", "Camila"];

// >>>>>> Callback 1

nomes.forEach(function (nome) {
    console.log(nome);
});

// >>>>>> Callback 2

nomes.forEach((nome) => {
    console.log(nome);
});

// >>>>>> Callback 3

function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome)