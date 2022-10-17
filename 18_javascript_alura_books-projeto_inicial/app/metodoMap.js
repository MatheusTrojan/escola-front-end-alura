function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
        // pega tudo que tenho de livro e faz uma cópia, com o livro.preco recebendo o desconto
    })
    return livrosComDesconto
}