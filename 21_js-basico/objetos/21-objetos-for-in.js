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

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") { // verifica se o tipo do elemento dentro do objeto Cliente é object ou function (não queremos exibir isso)
        continue // caso seja tipo objeto ou função, então passa adianta (continua sem fazer nada)
    } else {
        relatorio += `
        ${info} => ${cliente[info]}`
    }
}

console.log(relatorio)