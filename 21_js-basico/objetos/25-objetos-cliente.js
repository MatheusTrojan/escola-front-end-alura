function cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}
// com o New -> a partir da function cliente, estamos criando um novo cliente
// a const carlos é uma nova INSTANCIA de cliente, criada a partir da função construtora
const carlos = new cliente("Carlos", "12312312312", "carlos@carlos.com", 100)

console.log(carlos)