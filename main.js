const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(e){
    e.preventDefault()

    const linha = criarLinha()
    adicionarLinha(linha)
    limparLinha()
})

function criarLinha(){
    const nome = document.getElementById('nome')
    const telefone = document.getElementById('telefone')

    let linha = `<tr><td>${nome.value}</td><td>${telefone.value}</td></tr>`
    return linha
}

function adicionarLinha(linha){
    const conteudo = document.getElementById('conteudo')
    conteudo.innerHTML += linha
}

function limparLinha(){
    document.getElementById('nome').value = ''
    document.getElementById('telefone').value = ''
}