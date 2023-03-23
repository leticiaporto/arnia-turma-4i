const timestamp = (new Date()).getTime()
const publicKey = 'd0d76a60dcc1d76a2227bc2debaca41c'
const privateKey = '92eab95f3d5ee3fc201dbf74e7d984192599f316'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)
let personagens = []
let indexAtual = 0

proximo = () => {
    if (indexAtual < personagens.length - 1) {
        indexAtual++
        renderizarPersonagem(personagens[indexAtual])
    }
}

anterior = () => {
    if (indexAtual > 0) {
        indexAtual--
        renderizarPersonagem(personagens[indexAtual])
    }
}

renderizarPersonagem = (personagem) => {
    const content = document.getElementById('content')

    const comics = personagem.comics.items.filter((item, index) => {
        return index < 2
    })
    const series = personagem.series.items.filter((item, index) => {
        return index < 2
    })

    let elemento = ''
    elemento = `      
    <div class="box">
        <div class="box-container">
            <div class="box-image">
                <img src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}">
            </div>
            <div class="box-content">
                <div class="box-title">${personagem.name}</div>
                <div class="box-section">
                    <div class="box-section-title">
                        Revistas
                    </div>
                    <ul>`

    comics.forEach(comic => {
        elemento = elemento + `<li>${comic.name}</li>`
    })

    elemento = elemento +
        `</ul>
            </div>
            <div class="box-section">
                <div class="box-section-title">
                    Séries
                </div>
                <ul>`

    series.forEach(serie => {
        elemento = elemento + `<li>${serie.name}</li>`
    })

    elemento = elemento +
            `</ul>
                </div>
            </div>
        </div>
        <div class="buttons">
            <div class="button" onclick="anterior()">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="button" onclick="proximo()">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>`

    content.innerHTML = elemento
}

buscarPersonagens = async () => {
    const request = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)
    console.log(request)
    const result = await request.json()
    console.log(result)
    personagens = result.data.results
    renderizarPersonagem(personagens[indexAtual])
}

buscarPersonagens()