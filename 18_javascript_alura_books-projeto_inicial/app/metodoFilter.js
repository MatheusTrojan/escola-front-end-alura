const botoes = document.querySelectorAll(".btn")
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    //primeira coisa que a função vai fazer é atribuir o id do botão clicado ao elementoBtn
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

    exibirLivrosNaTela(livrosFiltrados)

    if (categoria == "disponivel") {
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados)

        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livrosComDesconto.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livrosComDesconto.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}