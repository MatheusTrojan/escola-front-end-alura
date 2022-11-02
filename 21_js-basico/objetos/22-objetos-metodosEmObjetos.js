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

function oferecerSeguro (obj) {

    const propsClientes = Object.keys(obj) //extrai uma lista de chaves do objeto

    if(propsClientes.includes("dependentes")) { //verifica se inclui a chave "dependentes" na lista propsClientes
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

console.log(Object.values(cliente)) // traz um array com os valores do objeto
console.log(Object.entries(cliente)) //traz um array com varios arrays dentro, contendo chave e valor
oferecerSeguro(cliente)