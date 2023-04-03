// Variável para armazena o index da questão que está sendo respondida
let currentIndexQuizQuestion = 0
// Variável para armazena a questão que está sendo respondida
let currentQuizQuestion = null
// Variável para armazena as questões do Quiz
let quizQuestions = []
// Variável para armazena as respostas do Quiz
let quizAnswers = []

/* Método para buscar a lista de questões na API */
const getQuestions = async () => {
    const apiResponse = await fetch('http://localhost:3000/questoes')
    const questoes = await apiResponse.json()
    return questoes
}

/*
    Método responsável por renderizar cada questão do quiz no arquivo "quiz.html"
*/
const renderQuizQuestion = (index) => {
    const questoesContent = document.getElementById('content-quiz')
    questoesContent.innerHTML = ''
    const question = quizQuestions[index]

    let questoesHtml = `
        <div class="question-title mb-4">${question.titulo}</div>
        <form id="quiz-form">`

    /* 
        Passa pelas alterativas da questão para montar os inputs do tipo "radio"
        Observa-se que todos os inputs "radio" tem o mesmo "name", mas "id" e "value" diferentes
        O "value" é o index da alternativa, para facilitar no momento da correção do Quiz
    */
    question.alternativas.forEach((alternativa) => {
        questoesHtml = questoesHtml + `
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="alternative" id="alternative${alternativa.numero}" value="${alternativa.numero}" />
                    <label class="form-check-label" for="alternative${alternativa.numero}">${alternativa.texto}</label>
                </div>
            </div>
        `
    })
    questoesHtml = questoesHtml + `
            <div class="mt-5 d-flex justify-content-between">`

    /* 
        Condicional para não mostrar botão "Anterior" na primeira questão
        Botão "Anterior" chama o método "navigate" parrasando o tipo "previous" como parâmetro
    */
    if (index > 0) {
        questoesHtml = questoesHtml + `<button type="button" class="primary-button" onclick="navigate('previous')">Anterior</button>`
    } else {
        questoesHtml = questoesHtml + `<div class="simulate-primary-button"></div>`
    }

    questoesHtml = questoesHtml + `<div class="footer-text">Questão ${index + 1}/${quizQuestions.length}</div>`

    /*
        Condicional para não mostrar botão "Próximo" na última questão e mostrar o botão "Finalizar"
        Botão "Próximo" chama o método "next" parrasando o tipo "previous" como parâmetro
        Botão "Finalizar" chama o método "finish"
    */
    if (index + 1 !== quizQuestions.length) {
        questoesHtml = questoesHtml + `<button type="button" class="primary-button" onclick="navigate('next')">Próximo</button>`
    } else {
        questoesHtml = questoesHtml + `<button type="button" class="primary-button" onclick="finish()">Finalizar</button>`
    }

    `</div></form>`

    questoesContent.innerHTML = questoesHtml
}

/*
    Método responsável por renderizar o resultado do quiz no arquivo "quiz.html".
*/
const renderQuizResult = (percentage) => {
    const questoesContent = document.getElementById('content-quiz')
    questoesContent.innerHTML = `
        <div class="quiz-result">
            <div class="result-icon">
                <i class="fa-regular fa-circle-check fa-8x"></i>
            </div>
            <div class="text">
                QUIZ Finalizado!
            </div>
            <div class="text">
                Você acertou ${percentage}% das questões
            </div>
        </div>
    `
}

/* 
    Método responsável por carregar o Quiz. 
    1. Busca os dados na API e armazena na variável global "quizQuestions"
    2. Atualiza na variável global "currentQuizQuestion" a questão atual que está sendo respondida para a primeira questão da lista
    3. Chama o método para renderizar questão na tela através do index
*/
const loadQuiz = async () => {
    quizQuestions = await getQuestions()
    currentQuizQuestion = quizQuestions[currentIndexQuizQuestion]
    renderQuizQuestion(currentIndexQuizQuestion)
}

/* 
    Método responsável por navegar entre as questões do Quiz. 
    type='next' para Próximo
    type='previous' para Anterior
*/
const navigate = async (type) => {
    //Recupera o valor da alternativa escolhida pelo usuário
    const alternative = document.getElementById('quiz-form').elements['alternative'].value

    /* 
        "Limpa" a resposta para a questão atual (currentQuizQuestion) se ela já existir no array "quizAnswers", evitando que tenham duas respostas para a mesma questão dentro do array
    */
    quizAnswers = quizAnswers.filter((answer) => answer.id !== currentQuizQuestion.id)

    /* 
        Busca a alternativa correta na questão atual
    */
    const correctAlternative = currentQuizQuestion.alternativas.find((elemento) => elemento.correta)

    /* 
        Armazena no array "quizAnswers" um objeto com a resposta da questão atual
        Observa-se que o atributo "correct" salva o resultado da comparação entre o que foi respondido pelo usuário "alternative" e a alternativa correta "correctAlternativeIndex" 
    */
    quizAnswers.push({
        questionId: currentQuizQuestion.id,
        alternative: alternative,
        correct: correctAlternative.numero === parseInt(alternative)
    })

    /*
        A partir do tipo de navegação, incrementa ou decrementa o index da questão atual para carregar a próxima questão ou a anterior
    */
    type === 'next' ? currentIndexQuizQuestion++ : currentIndexQuizQuestion--

    /*
        Atualiza a questão atual
    */
    currentQuizQuestion = quizQuestions[currentIndexQuizQuestion]

    /*
        Chama a função para renderizar na tela a nova questão
    */
    renderQuizQuestion(currentIndexQuizQuestion)
}

/* 
    Método responsável calcular o resultado do Quiz
    1. Verifica a quantidade de questões respondidas corretamente
    2. Calcula a porcentagem de acertos
    3. Chama o método para renderizar o resultado do Quiz na tela
*/
const finish = () => {
    const countCorrects = quizAnswers.filter((answer) => answer.correct).length
    const correctPercentage = (countCorrects * 100) / quizQuestions.length
    renderQuizResult(correctPercentage.toFixed(2))
}
