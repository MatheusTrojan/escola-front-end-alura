//export deixa visivel para os outros arquivos que queiram utilizar a função

const listaClientes = () => {
        return fetch (`http://localhost:3000/profile`) // método global > por padrão, a fetch já faz o GET e devolve uma promise
        .then(resposta => { //após o fetch, basta retornar a resposta transformada em json
            return resposta.json()
        })

            // ANTES DE USAR FETCH, USAVA ASSIM
    // const promise = new Promise((resolve, reject) => {            
    //     const http = new XMLHttpRequest() //faz a requisição XMLHttp

    //     http.open("GET", "http://localhost:3000/profile") //pega os dados do destino 


    //     http.onload = () => { // ao carregar a pagina, buscar os dados http
    //         if (http.status >= 400) { //se o status for maior que 400, deve ser rejeitado (ERROR 404)
    //             reject(JSON.parse(http.response))
    //         } else {
    //             resolve(JSON.parse(http.response))
    //         }
    //     }
    //     http.send() //envia os dados
    // })
    // return promise //retorna a const promise
}

const criaCliente = (nome, email) => {
    return fetch (`http://localhost:3000/profile`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        return resposta.body
    })
}

const removeCliente = (id) => {
    return fetch (`http://localhost:3000/profile/${id}`, {
        method: "DELETE",
    })
}
//quando for acessar o listaCliente lá na listaCliente-controller temos que usar a notação de ponto >>> clienteService.listaCliente (isso já vai me falar de onde ta vindo a listaCliente)
export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente
}