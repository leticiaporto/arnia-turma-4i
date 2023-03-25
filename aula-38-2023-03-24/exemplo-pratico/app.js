const modal = document.getElementById("modal")
const form = document.getElementById('subscribe')
let noticiaEmEdicao = null

getNoticias = async () => {
    const content = document.getElementById('content')
    const requisicao = await fetch('http://localhost:3000/noticias')
    const noticias = await requisicao.json()
    console.log(noticias)
    let conteudo = ''

    noticias.forEach(noticia => {
        conteudo = conteudo + `
            <div>
                ${noticia.titulo}
                <button onclick=editarNoticia(${noticia.id})>Editar</button>
                <button onclick=removerNoticia(${noticia.id})>Remover</button>
            </div>
        `
    })

    content.innerHTML = conteudo
}

postNoticia = async (noticia) => {
    await fetch('http://localhost:3000/noticias', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noticia)
    })
    closeModal()
    getNoticias()
}

putNoticia = async (id, noticia) => {
    await fetch(`http://localhost:3000/noticias/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noticia)
    })
    closeModal()
    getNoticias()
    noticiaEmEdicao = null
}

removerNoticia = async (idNoticia) => {
    await fetch(`http://localhost:3000/noticias/${idNoticia}`, {
        method: 'DELETE'
    })
    getNoticias()
}

editarNoticia = async (idNoticia) => {
    const requisicao = await fetch(`http://localhost:3000/noticias/${idNoticia}`)
    noticiaEmEdicao = await requisicao.json()
    
    document.getElementById('titulo').value = noticiaEmEdicao.titulo
    document.getElementById('autor').value = noticiaEmEdicao.autor
    document.getElementById('imagem').value = noticiaEmEdicao.imagem
    document.getElementById('texto').value = noticiaEmEdicao.texto

    openModal()
}

openModal = () => {
    modal.style.display = "block"
}

closeModal = () => {
    modal.style.display = "none"
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const tituloForm = form.elements['titulo'].value
    const autorForm = form.elements['autor'].value
    const imagemForm = form.elements['imagem'].value
    const textoForm = form.elements['texto'].value

    const novaNoticia = {
        titulo: tituloForm,
        autor: autorForm,
        imagem: imagemForm,
        texto: textoForm
    }

    if(noticiaEmEdicao === null) {
        postNoticia(novaNoticia)
    } else {
        putNoticia(noticiaEmEdicao.id, novaNoticia)
    }
})

getNoticias()