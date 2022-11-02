function cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

function clientePoupanca (nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo) // chama o construtor cliente para dentro do construtor clietePoupanca, e este vai herdar as propriedades e comportamentos de cliente.
    this.saldoPoup = saldoPoup
}

const jose = new clientePoupanca("José", "59948754785", "jose@jose.com", 125, 320)

console.log(jose)

clientePoupanca.prototype.depositarPoup = function (valor) { //adiciona ao prototipo do objeto clientePoupanca o metodo depositarPoup
    this.saldoPoup += valor
}

jose.depositarPoup(550)

console.log(jose)