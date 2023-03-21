
const timestamp = (new Date()).getTime()
const publicKey = 'd0d76a60dcc1d76a2227bc2debaca41c'
const privateKey = '92eab95f3d5ee3fc201dbf74e7d984192599f316'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise
  .then(response => {
    console.log(response)
    let content = document.getElementById('content')
    content.innerHTML = content.innerHTML + '<ul>'

    response.json()
      .then(res => {
        console.log(res)
        res.data.results.forEach(elemento => {
          content.innerHTML = content.innerHTML + 
          `<li>
            <img class="imagem" src="${elemento.thumbnail.path}.${elemento.thumbnail.extension}">
            ${elemento.name}
          </li>` 
        })       
        content.innerHTML = content.innerHTML + '</ul>'
      })

  })
  .catch(error => {
    console.log('Erro: ' + error)
  })
