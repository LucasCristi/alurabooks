// utilizando método map para aplicar desconto nos itens
// método map executa uma func para cada elemento do array e devolve UM NOVO array como resultado

function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => { //map precisa de um return
        return { ...livro, preco: livro.preco - (livro.preco * desconto) } //vai copiar todo o OBJETO LIVRO só que o PRECO vai alterar
    })
    return livrosComDesconto
}