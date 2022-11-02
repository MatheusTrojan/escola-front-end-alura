const cliente = {
    nome: "Carlos",
    idade: 25,
    cpf: "12313213132",
    email: "carlos@carlos.com",
    fones: ["559122345123", "559584782564"],
    dependentes: [
        { 
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011" },
        {
            nome: "Sandra",
            parentesco: "filha",
            dataNasc: "27/05/2014"
        }    
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo)

cliente.depositar(30)

console.log(cliente.saldo)

// METODOS >> funções que trabalham no contexto de um objeto
// depositar >> função que faz parte do objeto cliente é um METODO

// this é palavra reservada que se refere à isso, esse objeto, essa instância, esse CLIENTE 