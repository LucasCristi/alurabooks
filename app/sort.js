//utilizado para ordenar (SORT)

let ordemDePreco = document.getElementById('btnOrdenarPorPreco')
ordemDePreco.addEventListener('click', ordenarLivrosPorPreco)


function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco) //menor para maior - se for b - a fica em ordem decrescente
    exebirOsLivrosNaTela(livrosOrdenados)
}