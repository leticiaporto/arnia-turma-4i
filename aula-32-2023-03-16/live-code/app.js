const form = document.getElementById('subscribe')

const NAME_REQUIRED = 'Por favor insira o seu nome'
const EMAIL_REQUIRED = 'Por favor insira o seu e-mail'
const EMAIL_INVALID = 'Por favor insira um e-mail no padrão correto'
const CPF_REQUIRED = 'Por favor insira o seu CPF'
const CPF_INVALID = 'Por favor insira um CPF válido'

/**
 * Função que tem como objetivo colocar conteúdo dentro da tag small que está dentro das sections com
 * a classe field. O input.parentNode serve para pegar a tag que é pai do input passado por parâmetro, 
 * e o querySelector seleciona a primeira tag small que ele encontrar. Além disso, a função também é 
 * responsável por colorir a borda do input, mostrando que está tudo certo ou errado.
 * @param {HTMLInputElement} input Elemento HTML Input em que será mostrada a mensagem
 * @param {string} message String contendo a mensagem que será inserida dentro da tag small
 * @param {boolean} type Tipo da mensagem, sendo true para sucesso e false para erro
 * @returns {boolean} True ou false a depender do type passado
 */
function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small')
  msg.innerText = message
  if(type) {
    input.classList.remove('error')
    input.classList.add('success')
  } else {
    input.classList.remove('success')
    input.classList.add('error')
  }
  return type
}

/**
 * Função que tem como objetivo utilizar a função showMessage criada anteriormente para mostrar um
 * erro na tela. Repare que ela recebe o mesmo input que será passado para showMessage e também a 
 * mensagem, mas ela sempre passa false para o parâmetro type.
 * @param {HTMLInputElement} input Elemento HTML Input em que será mostrada a mensagem de erro 
 * @param {string} message String contendo a mensagem que será inserida dentro da tag small 
 * @returns {false}
 */
function showError(input, message) {
  return showMessage(input, message, false)
}

/**
 * Função que tem como objetivo utilizar a função showMessage criada anteriormente para mostrar um
 * sucesso no input. Repare que ela recebe o mesmo input que será passado para showMessage, mas não 
 * recebe a mensagem, pois um sucesso não precisa ter mensagem.
 * @param {HTMLInputElement} input Elemento HTML Input em que será mostrada a mensagem de sucesso
 * @returns {true}
 */
function showSuccess(input) {
  return showMessage(input, '', true)
}

/**
 * Função que tem como objetivo verificar se há algum valor dentro do input ou se ele está vazio.
 * Repare que a função trim() serve para retirar os espaços em branco antes e depois da string.
 * @param {HTMLInputElement} input Elemento HTML Input que será verificado 
 * @param {string} message Mensagem de erro caso o elemento esteja vazio
 * @returns 
 */
''

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message)
  }
  return showSuccess(input)
}

/**
 * Função que tem como objetivo validar um e-mail. Primeiro ela verifica se o input possui alguma
 * coisa inserida (utilizando a função hasValue) e depois ele testa o e-mail a partir de um regex, 
 * para ver se ele segue o padrão correto.
 * @param {HTMLInputElement} input Elemento HTML Input de email que será verificado 
 * @param {string} requiredMsg Mensagem de erro caso o elemento esteja vazio
 * @param {string} invalidMsg Mensagem de erro caso o elemento seja inválido
 * @returns {boolean} True caso o e-mail seja válido e false caso não
 */
function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const email = input.value.trim()

  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg)
  }

  return true
}

function validateCpf(input, requiredMsg, invalidMsg){
  if(!hasValue(input, requiredMsg)) {
    return false
  }
  //000.000.000-10
  //00.000.999/8888-90
  const cpfRegex = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/
  const cpf = input.value.trim()

  if(!cpfRegex.test(cpf)) {
    return showError(input, invalidMsg)
  }

  return true
}

/**
 * Esta função chamada a partir do elemento form que pegamos lá em cima adiciona um 
 * listener para o evento submit. Quando este evento ocorre, a função que está declarada
 * no segundo parâmetro é disparada. Primeiro, a função previne que o comportamento padrão
 * de um submit seja executado. Segundo, ela pega os elementos HTML de nome e email. Terceiro,
 * ela valida cada um dos campos e por último ela deixa executar o submit caso ambos sejam
 * válidos.
 */
form.addEventListener('submit', (event) => {
  console.log(event)
  event.preventDefault()

  const nameInput = form.elements['fullName']
  const emailInput = form.elements['email']
  const cpfInput = form.elements['cpf']

  const nameValid = hasValue(nameInput, NAME_REQUIRED)
  const emailValid = validateEmail(emailInput, EMAIL_REQUIRED, EMAIL_INVALID)
  const cpfValid = validateCpf(cpfInput, CPF_REQUIRED, CPF_INVALID)

  if (nameValid && emailValid) {
    form.submit()
  }
})