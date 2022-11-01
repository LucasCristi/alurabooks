//realizar requisição json

let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' //cria const para requisição
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI) //resposta 'await'
    livros = await res.json() //atribuir em livros
    let livrosComDesconto = aplicarDesconto(livros)
    exebirOsLivrosNaTela(livrosComDesconto) //livros ref ao fetch
    // console.table(livros)
}

