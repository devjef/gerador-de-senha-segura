botaoFechaModal.addEventListener('click', copiaSenha)

function copiaSenha() {
    const senhaValor = mostraSenha.innerText
    inputSenha.value = senhaValor
    inputConfirmaSenha.value = senhaValor
}




