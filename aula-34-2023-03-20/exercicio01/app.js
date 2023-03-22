const timestamp = (new Date()).getTime()
const publicKey = 'insira_sua_chave_publica_aqui'
const privateKey = 'insira_sua_chave_privada_aqui'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

renderizarPersonagens = (personagens) => {
    const content = document.getElementById('content')
    
    personagens.forEach(personagem => {
        const comics = personagem.comics.items.filter((item, index) => {
            return index < 2
        })
        const series = personagem.series.items.filter((item, index) => {
            return index < 2
        })

        let elemento = ''
        elemento = `      
            <div class="box">
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
        </div>`

        content.innerHTML = content.innerHTML + elemento
    })
}

//async function buscarPersonagens() {
buscarPersonagens = async () => {
    const request = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)
    console.log(request)
    const result = await request.json()
    console.log(result)
    renderizarPersonagens(result.data.results)
}

buscarPersonagens()