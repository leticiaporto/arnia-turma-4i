getNoticias = async () => {
    const requisicao = await fetch('http://localhost:3000/noticias')
    const noticias = await requisicao.json()
    console.log(noticias)
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
}

cadastrarNoticia = () => {
    const novaNoticia = {
        titulo: "W3ERP",
        descricao: "Boas vindas à nova versão do sistema",
        autor: "Letícia"
    }
    postNoticia(novaNoticia)
}

getNoticias()