botaoVerSenha.addEventListener('click', revelaSenha)

const PASSWORD = 'password'
const TEXT = 'text'

function revelaSenha(e) {
    e.preventDefault()
    if(inputSenha.type && inputConfirmaSenha.type === PASSWORD) {
        inputSenha.type = TEXT
        inputConfirmaSenha.type = TEXT
    } else {
        inputSenha.type = PASSWORD
        inputConfirmaSenha.type = PASSWORD
    }
}