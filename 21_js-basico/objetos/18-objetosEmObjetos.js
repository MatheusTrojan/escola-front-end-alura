const cliente = {
    nome: "Carlos",
    idade: 25,
    cpf: "12313213132",
    email: "carlos@carlos.com",
    fones: ["559122345123", "559584782564"]
}

cliente.dependentes = {   //cria dependente
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva" //altera o nome do dependente

console.log(cliente)