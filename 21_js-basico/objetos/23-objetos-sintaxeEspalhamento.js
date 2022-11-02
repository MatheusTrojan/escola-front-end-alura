const clientes = [
    {
        nome: "Carlos",
        idade: 25,
        cpf: "12313213132",
        email: "carlos@carlos.com",
        fones: ["559122345123", "559584782564"],
        dependentes: [{ 
                nome: "Sara",
                parentesco: "filha",
                dataNasc: "20/03/2011" },
            {
                nome: "Sandra",
                parentesco: "filha",
                dataNasc: "27/05/2014"
            }]
    },
    {
        nome: "Sofia",
        idade: 32,
        cpf: "8951398452",
        email: "sofia@sofia.com",
        fones: ["559165165123", "55999982564"],
        dependentes: [{ 
                nome: "Manoel",
                parentesco: "filho",
                dataNasc: "30/08/2012" 
            },
            { 
                nome: "Maria",
                parentesco: "filha",
                dataNasc: "22/01/2018" 
            }]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)

let lista = []
for (let index = 0; index < clientes.length; index++) {
    lista = lista.concat([...clientes[index].dependentes]) //dessa forma, nao é necessario repetir o codigo acessando cada indice de clientes
}

console.table(lista)