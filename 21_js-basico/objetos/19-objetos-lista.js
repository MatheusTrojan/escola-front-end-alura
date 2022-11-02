const cliente = {
    nome: "Carlos",
    idade: 25,
    cpf: "12313213132",
    email: "carlos@carlos.com",
    fones: ["559122345123", "559584782564"],
    dependentes: [{ 
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Sandra",
    parentesco: "filha",
    dataNasc: "27/05/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "27/05/2014")

console.log(`A filha mais nova é a ${filhaMaisNova[0].nome}`)
