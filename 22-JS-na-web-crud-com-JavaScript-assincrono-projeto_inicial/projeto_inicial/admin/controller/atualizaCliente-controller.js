import { clienteService } from "../service/cliente-service.js"

(async ()=> {
    const pegaURL = new URL(window.location) // instanciamos o objeto URL e passamos onde estamos na pagina com window location

    const id = pegaURL.searchParams.get("id") // pegamos o id que fica na url (que veio da query string na função criaNovaLinha)
    
    const inputNome = document.querySelector("[data-nome]") //percorre o DOM peganod nome e email
    const inputEmail = document.querySelector("[data-email]")
    
    try {
        const dados = await clienteService.detalhaCliente(id)
        inputNome.value = dados.nome //aqui os campos do inputNome e Email será os mesmos do cliente que pegamos pelo ID
        inputEmail.value = dados.email
    }
    catch(erro){
        console.log(erro)
        window.location.href = "../telas/erro.html"
    }

    
    const formulario = document.querySelector("[data-form]")
    
    formulario.addEventListener("submit", async(evento) => {
        evento.preventDefault()
    
        try {
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            
            window.location.href = "../telas/edicao_concluida.html"
        }
        catch(erro){
            console.log(erro)
            window.location.href = "../telas/erro.html"
        }
    })
})()
