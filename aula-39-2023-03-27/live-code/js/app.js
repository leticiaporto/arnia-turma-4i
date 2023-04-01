const form = document.getElementById('subscribe')
const modal = document.getElementById('modal')
let questaoEmEdicao = null

const abrirModal = () => {
    modal.style.display = 'block'
}

const fecharModal = () => {
    modal.style.display = 'none'
}

const getQuestoes = async () => {
    const requisicao = await fetch('http://localhost:3000/questoes')
    const questoes = await requisicao.json()
    const content = document.getElementById('content')
    let conteudo = ''
    questoes.forEach((questao) => {
        conteudo = conteudo + `
            <div>
                ${questao.titulo}
                <button onclick="editarQuestao(${questao.id})">Editar</button>
            </div>
        `
    })
    content.innerHTML = conteudo
}

const postQuestao = async (questao) => {
    await fetch('http://localhost:3000/questoes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(questao)
    })
}

const putQuestao = async (id, questao) => {
    await fetch(`http://localhost:3000/questoes/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(questao)
    })
    questaoEmEdicao = null
}

const editarQuestao = async (id) => {
    const requisicao = await fetch(`http://localhost:3000/questoes/${id}`)
    const questao = await requisicao.json()
    questaoEmEdicao = questao
    console.log(questao)

    const alternativa1 = questao.alternativas.find((alternativa) => alternativa.numero === 1)
    const alternativa2 = questao.alternativas.find((alternativa) => alternativa.numero === 2)
    const alternativa3 = questao.alternativas.find((alternativa) => alternativa.numero === 3)
    const alternativa4 = questao.alternativas.find((alternativa) => alternativa.numero === 4)
    
    document.getElementById('titulo').value = questao.titulo

    document.getElementById('textoAlternativa1').value = alternativa1.texto
    document.getElementById('alternativa1').checked = alternativa1.correta

    document.getElementById('textoAlternativa2').value = alternativa2.texto
    document.getElementById('alternativa2').checked = alternativa2.correta

    document.getElementById('textoAlternativa3').value = alternativa3.texto
    document.getElementById('alternativa3').checked = alternativa3.correta

    document.getElementById('textoAlternativa4').value = alternativa4.texto
    document.getElementById('alternativa4').checked = alternativa4.correta

    abrirModal()
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const tituloForm = form.elements['titulo'].value
    const alternativa1Form = form.elements['textoAlternativa1'].value
    const alternativa2Form = form.elements['textoAlternativa2'].value
    const alternativa3Form = form.elements['textoAlternativa3'].value
    const alternativa4Form = form.elements['textoAlternativa4'].value
    /* 
        A variável 'correto' poderá receber 'alternativa1', 'alternativa2', 'alternativa3' ou 'alternativa4' à depender do radio que foi clicado
    */
    const correto = form.elements['correto'].value 

    const questao = {
        titulo: tituloForm,
        alternativas: [
            {
                numero: 1,
                texto: alternativa1Form,
                correta: correto === 'alternativa1' // será true ou false
            },
            {
                numero: 2,
                texto: alternativa2Form,
                correta: correto === 'alternativa2' // será true ou false
            },
            {
                numero: 3,
                texto: alternativa3Form,
                correta: correto === 'alternativa3' // será true ou false
            },
            {
                numero: 4,
                texto: alternativa4Form,
                correta: correto === 'alternativa4' // será true ou false
            }
        ]
    }

    if(questaoEmEdicao) {
        putQuestao(questaoEmEdicao.id, questao)
    } else {
        postQuestao(questao)
    }
})

getQuestoes()