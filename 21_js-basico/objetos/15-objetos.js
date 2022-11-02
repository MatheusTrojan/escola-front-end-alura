const cliente = {
    nome: "Carlos",
    idade: 25,
    cpf: "12313213132",
    email: "carlos@carlos.com"
}

console.log(`O nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos.`)

console.log(`Os três primeiro digitiso do CPF são: ${cliente.cpf.substring(0, 3)}`)