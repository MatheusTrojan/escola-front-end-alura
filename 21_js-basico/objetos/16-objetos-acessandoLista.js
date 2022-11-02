const cliente = {
    nome: "Carlos",
    idade: 25,
    cpf: "12313213132",
    email: "carlos@carlos.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]]) >> acessando um elemento do objeto através do indice correspondente no array chaves

// chaves.forEach(info => console.log(cliente[info]))   >>  passando por todos elementos do objeto com o indice do array chaves

cliente.fone = "231132132"  // assim já consigo adicionar um elemento ao objeto

console.log(cliente)

cliente.fone = "99999999"  // se manter o nome e alterar o valor, será substituido no anterior

console.log(cliente)