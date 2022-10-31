//realizar requisição json

let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' //cria const para requisição
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exebirOsLivrosNaTela(livrosComDesconto) //livros ref ao fetch
}

