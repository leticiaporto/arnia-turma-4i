const modal = document.getElementById('modal')
const fecharModal = document.getElementById("fechar")

fechar = () => {
    modal.classList.remove('modal-visivel')
}

fecharModal.addEventListener("click", fechar)

abrirModal = () => {
    const nome = document.getElementById('nome').value
    const email = document.getElementById("email").value

    document.getElementById('nome-modal').innerHTML = nome
    document.getElementById('email-modal').innerHTML = email

    document.getElementById('nome').value = ''
    document.getElementById('cpf').value = ''
    document.getElementById('email').value = ''
    document.getElementById('senha').value = ''

    modal.classList.add('modal-visivel')
}
