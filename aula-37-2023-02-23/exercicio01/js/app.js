/* Variável que armazena o objeto DOM que representa o formulário */
const form = document.getElementById('subscribe')
/* Variável que armazena o objeto DOM que representa o modal */
const modal = document.getElementById("modal")
/* Variável que armazena a notícia que está sendo editada no momento (caso haja) */
let noticiaEmEdicao = null

/* Função responsável por abrir o modal */
const abrirModal = () => {
    modal.style.display = "block"
}

/* Função responsável por abrir o modal */
const fecharModal = () => {
    modal.style.display = "none"
    limparDados()
}

/* 
    Escuta-se o evento de clique na página. 
    Se o local clicado for a parte cinza do fundo do modal, chama-se a função para fechá-lo.
*/
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        fecharModal()
    }
})

/* 
    Função para limpar os dados digitados nos campos do formlário após cadastro ou edição
*/
const limparDados = () => {
    document.getElementById('titulo').value = ''
    document.getElementById('autor').value = ''
    document.getElementById('imagem').value = ''
    document.getElementById('texto').value = ''
}

/* 
    Função responsável por montar uma string com o HTML das notícias e depois adicioná-lo à página
*/
const renderizarNoticias = (noticias) => {
    const content = document.getElementById('content')
    let conteudo = ''

    noticias.forEach((noticia) => {
        conteudo = conteudo + `
      <div class="card">
        <div class="image">
          <img src="${noticia.imagem}" />
        </div>
        <div class="card-content">
          <div class="card-texts">
            <div class="card-title">
              ${noticia.titulo}
            </div>
            <div class="card-text">
              ${noticia.texto}
            </div>
          </div>
          <div class="card-buttons">
            <button class="remove-button" onclick=excluirNoticia(${noticia.id})>Excluir</button>
            <button class="edit-button" onclick=editarNoticia(${noticia.id})>Editar</button>
          </div>
        </div>
      </div>
    `
    })

    content.innerHTML = conteudo
}

/* 
    Função responsável por buscar as notícias na API
*/
const getNoticias = async () => {
    const apiResponse = await fetch('http://localhost:3000/noticias')
    const noticias = await apiResponse.json()
    renderizarNoticias(noticias)
}

/* 
    Função responsável por cadastrar uma notícia na API
*/
const postNoticia = async (noticia) => {
    await fetch('http://localhost:3000/noticias', {
        method: 'POST', // indica o método HTTP utilizado
        headers: { // inclue-se no cabeçalho da requisição informações que indicam o formato dos dados (json)
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noticia) // corpo da requisição: onde envia-se a notícia. É necessário converter para string usando o 'JSON.stringify()'
    })
    /* 
        Chama-se a função para fechar o modal após a inclusão
    */
    fecharModal()
    /* 
        Chama-se a função para buscar as notícias atualizadas
    */
    getNoticias()
}

/* 
    Função responsável por cadastrar uma notícia na API
*/
const putNoticia = async (id, noticia) => {    
    /* 
        Na URL fornecida ao 'fetch' inclu-se o 'id' da notícia que pretende-se editar
    */
    await fetch(`http://localhost:3000/noticias/${id}`, {
        method: 'PUT', // indica o método HTTP utilizado
        headers: { // inclue-se no cabeçalho da requisição informações que indicam o formato dos dados (json)
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noticia)// corpo da requisição: onde envia-se a notícia. É necessário converter para string usando o 'JSON.stringify()'
    })
    /* 
        Chama-se a função para fechar o modal após a inclusão
    */
    fecharModal()
    /* 
        Chama-se a função para buscar as notícias atualizadas
    */
    getNoticias()
    /* 
        Após a conclusão da edição, define-se o valor null à variável 'noticiaEmEdicao' para indicar que não há mais nenhuma notícia sendo editada no momento
    */
    noticiaEmEdicao = null
}

/* 
    Função chamada ao clicar no botão 'Excluir' da notícia.
    Função responsável por deletar uma notícia da API.
*/
const excluirNoticia = async (idNoticia) => {
    await fetch(`http://localhost:3000/noticias/${idNoticia}`, {
        method: 'DELETE'
    })
    /* 
        Chama-se a função para buscar as notícias atualizadas
    */
    getNoticias()
}

/* 
    Função chamada ao clicar no botão 'Editar' da notícia.
    Função responsável por buscar os dados na API e carregar no formulário.
*/
const editarNoticia = async (id) => {
    /* 
        Na URL fornecida ao 'fetch' inclu-se o 'id' da notícia que pretende-se buscar
    */
    const requisicao = await fetch(`http://localhost:3000/noticias/${id}`)
    /* 
        Atribui-se a noticia retornada à variável global 'noticiaEmEdicao' 
    */
    noticiaEmEdicao = await requisicao.json()   
    /* 
        Carrega-se o dados da notícia nos campos do formulário 
    */
    document.getElementById('titulo').value = noticiaEmEdicao.titulo
    document.getElementById('autor').value = noticiaEmEdicao.autor
    document.getElementById('imagem').value = noticiaEmEdicao.imagem
    document.getElementById('texto').value = noticiaEmEdicao.texto
    /* 
        Chama-se a função para abrir o modal 
    */
    abrirModal()
}

/*
    O evento de escuta do submit é adicionado ao formulário.
    Ao submeter o formlário, a função anônima defina no 2º parâmetro é acionada.
*/
form.addEventListener('submit', (event) => {
    event.preventDefault()

    /*
        Recuperação dos valores dos campos do formulário
    */
    const tituloForm = form.elements['titulo'].value
    const autorForm = form.elements['autor'].value
    const imagemForm = form.elements['imagem'].value
    const textoForm = form.elements['texto'].value

    /*
        Monta-se um objeto com os dados dos campos
    */
    const objetoNoticia = {
        titulo: tituloForm,
        autor: autorForm,
        imagem: imagemForm,
        texto: textoForm
    }
    
    /*
        Verifica-se se alguma notícia está sendo editada no momento.
        Se estiver, envia os dados para o método 'putNoticia' (responsável pela atualização dos dados da notícia na API)
        Se não, envia os dados para o método 'postNoticia' (responsável pelo cadastro da notícia na API)
    */
    if (noticiaEmEdicao) {
        putNoticia(noticiaEmEdicao.id, objetoNoticia)
    } else {
        postNoticia(objetoNoticia)
    }
})

getNoticias()