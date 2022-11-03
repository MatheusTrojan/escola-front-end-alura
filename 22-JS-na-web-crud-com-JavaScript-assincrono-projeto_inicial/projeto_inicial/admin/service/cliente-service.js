const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement("tr")
    const conteudo = `    
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
        `
    
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const tabela = document.querySelector("[data-tabela]") //busca o elemento com esse data atribute


const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {            
        const http = new XMLHttpRequest() //faz a requisição XMLHttp

        http.open("GET", "http://localhost:3000/profile") //pega os dados do destino 

        http.onload = () => { // ao carregar a pagina, buscar os dados http
            if (http.status >= 400) { //se o status for maior que 400, deve ser rejeitado (ERROR 404)
                reject(JSON.parse(http.response))
            } else {
                resolve(JSON.parse(http.response))
            }
        }
        http.send() //envia os dados
    })
    return promise //retorna a const promise
}

listaClientes() //chama a função da requisição
.then( data => { //após feita a requisição, chama a função passando o data como parametro
    data.forEach(elemento => { // passa por todo array recebido de data (nome do cliente e email)
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email)) //mostra na tela o resultado
    })
})