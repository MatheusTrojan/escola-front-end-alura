import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {
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
    linhaNovoCliente.dataset.id = id //criando um data atribute ID para cada cliente

    return linhaNovoCliente
}

const tabela = document.querySelector("[data-tabela]") //busca o elemento com esse data atribute

tabela.addEventListener("click", (evento) => {
    let botaoDeletar = evento.target.className == "botao-simples botao-simples--excluir"
    if(botaoDeletar) {
        const linhaCliente = evento.target.closest("[data-id]") //método closest para encontrar o elemento do DOM mais próximo ao que queremos remover
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)
        .then( () => {
            linhaCliente.remove()
        })
    }
})

clienteService.listaClientes() //chama a função da requisição, pegando os dados da api
.then( data => { //após feita a requisição, chama a função passando o data como parametro
    data.forEach(elemento => { // passa por todo array recebido de data (nome do cliente e email)
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id)) //mostra na tela o resultado
    })
})