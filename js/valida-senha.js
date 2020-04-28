formCadastraSenha.addEventListener('submit', validaSenha)

function validaSenha(e) {
    e.preventDefault()
    if(inputSenha.value != inputConfirmaSenha.value) {
        textSucess.classList.add('d-none')
        textError.classList.remove('d-none')
    } else {
        textError.classList.add('d-none')
        textSucess.classList.remove('d-none')
    }
}