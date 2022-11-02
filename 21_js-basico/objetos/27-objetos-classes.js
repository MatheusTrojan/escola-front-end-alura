class Cliente {
    constructor (nome, email, cpf, saldo) { //propriedades da classe
        this.nome = nome
        this.email = email
        this.cpf = cpf 
        this.saldo = saldo
    }

    depositar(valor) { //comportamentos da classe
        this.saldo += valor
    }

    exibirSaldo() { //comportamentos da classe
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente { //extends é tipo: ClientePoupanca herda propriedades da classe Cliente
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo) // pega o construtor da classe Cliente, puxa para a classe ClientePoupanca e passa para o super as informações para construir o Cliente
        this.saldoPoupanca = saldoPoupanca // adiciona as informações da poupança
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}

const joao = new ClientePoupanca("Joao", "joao@joao.com", "1456465411", 100, 320)

console.log(joao)

joao.depositarPoupanca(550)
joao.depositar(5)

console.log(joao)