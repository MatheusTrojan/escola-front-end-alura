//export deixa visivel para os outros arquivos que queiram utilizar a função

const listaClientes = () => {
        return fetch (`http://localhost:3000/profile`) // método global > por padrão, a fetch já faz o GET e devolve uma promise
        .then(resposta => { //após o fetch, basta retornar a resposta transformada em json
            if (resposta.ok){
                return resposta.json()
            }
            throw new Error("Não foi possível listar os clientes")    
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
        if (resposta.ok){
            return resposta.body
        }
        throw new Error("Não foi possível criar um cliente")  
    })
}

const removeCliente = (id) => {
    return fetch (`http://localhost:3000/profile/${id}`, {
        method: "DELETE",
    })
    .then( resposta => {
        if (!resposta.ok) {
            throw new Error("Não foi possível remover o cliente")  
        }
    })
}

const detalhaCliente = (id) => {
    return fetch (`http://localhost:3000/profile/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error("Não foi possível detalhar o cliente")  
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch (`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error("Não foi possível atualizar o cliente") 
    })
}




//quando for acessar o listaCliente lá na listaCliente-controller temos que usar a notação de ponto >>> clienteService.listaCliente (isso já vai me falar de onde ta vindo a listaCliente)
export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}