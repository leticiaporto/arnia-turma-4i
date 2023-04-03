const form = document.getElementById('subscribe')
const modal = document.getElementById('modal')
let questaoEmEdicao = null

/* 
    Método para limpar os campos do formulário
    1. Os valor de todos os campos de texto são definidos como vazios 
    2. O atributo checked dos campos de radio são definidos como "false"
*/
const limparCampos = () => {
    document.getElementById('titulo').value = ''
    document.getElementById('textoAlternativa1').value = ''
    document.getElementById(`alternativa1`).checked = false
    document.getElementById('textoAlternativa2').value = ''
    document.getElementById(`alternativa2`).checked = false
    document.getElementById('textoAlternativa3').value = ''
    document.getElementById(`alternativa3`).checked = false
    document.getElementById('textoAlternativa4').value = ''
    document.getElementById(`alternativa4`).checked = false
}

/* Método para abrir o modal definindo o display do elemento como "block" */
const abrirModal = () => {
    modal.style.display = 'block'
}

/* Método para fechar o modal definindo o display do elemento como "none" */
const fecharModal = () => {
    modal.style.display = 'none'
    limparCampos()
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
    Função responsável por montar uma string com o HTML das questões e depois adicioná-lo à página
*/
const renderizarQuestoes = (questoes) => {
    const content = document.getElementById('content')
    let conteudo = ''
    questoes.forEach((questao) => {
        conteudo = conteudo + `
            <div class="card mb-3">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div>${questao.titulo}</div>
                    <div class="d-flex">
                        <button type="button" class="button" onclick="editarQuestao(${questao.id})"><i class="fa-solid fa-pen-to-square fa-lg"></i></button>
                        <button type="button" class="button remove-button" onclick="deletarQuestao(${questao.id})"><i class="fa-solid fa-trash-can fa-lg"></i></button>
                    </div>
                </div>
            </div>
        `
    })
    content.innerHTML = conteudo
}
/* 
    Método para carregar as questões.
    1. Busca os dados na API
    2. Efetua o forEach para renderizá-los na tela
*/
const getQuestoes = async () => {
    const requisicao = await fetch('http://localhost:3000/questoes')
    const questoes = await requisicao.json()
    return questoes
}

/* Método para cadastrar uma nova questão através da API */
const postQuestao = async (questao) => {
    await fetch('http://localhost:3000/questoes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(questao)
    })
    /* 
        Chama-se a função para fechar o modal 
    */
    fecharModal()
    /* 
        Chama-se a função para buscar as questões atualizadas
    */
    loadQuestoes()
}

/* Método para atualizar uma questão existente na API */
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
    /* 
        Chama-se a função para fechar o modal 
    */
    fecharModal()
    /* 
        Chama-se a função para buscar as questões atualizadas
    */
    loadQuestoes()
}

/* 
    Método chamado ao clicar no botão de "lixeira" da listagem
    Método para remover uma questão através da API */
const deletarQuestao = async (id) => {
    await fetch(`http://localhost:3000/questoes/${id}`, {
        method: 'DELETE'
    })
    loadQuestoes()
}

/* 
    Método chamado ao clicar no botão de "lápis" da listagem
    1. Busca os dados da questão pelo "id"
    2. Carrega nos campos do modal
    3. Abre o modal
*/
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

/* 
    Método para carregar as questões.
    1. Busca os dados na API
    2. Chama o método para renderizá-los na tela
*/
const loadQuestoes = async () => {
    const questions = await getQuestoes()
    renderizarQuestoes(questions)
}

/* 
    Ouvinte da ação de "submit" do formulário 
*/
form.addEventListener('submit', (event) => {
    event.preventDefault()

    //Recupera os dados do formulário
    const tituloForm = form.elements['titulo'].value
    const alternativa1Form = form.elements['textoAlternativa1'].value
    const alternativa2Form = form.elements['textoAlternativa2'].value
    const alternativa3Form = form.elements['textoAlternativa3'].value
    const alternativa4Form = form.elements['textoAlternativa4'].value
    /* 
        A variável 'correto' poderá receber 'alternativa1', 'alternativa2', 'alternativa3' ou 'alternativa4' à depender do radio que foi clicado
    */
    const correto = form.elements['correto'].value 

    //Monta o objeto
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
    /*
        Verifica-se se alguma questão está sendo editada no momento.
        Se estiver, envia os dados para o método 'putQuestao' (responsável pela atualização dos dados da notícia na API)
        Se não, envia os dados para o método 'postQuestao' (responsável pelo cadastro da notícia na API)
    */
    if(questaoEmEdicao) {
        putQuestao(questaoEmEdicao.id, questao)
    } else {
        postQuestao(questao)
    }
})

/* Método chamado após a página ser carregada */
loadQuestoes()