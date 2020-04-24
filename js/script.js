const inputRangeCaracteres = document.getElementById('rangeCaracteres')
const inputNumeroCaracteres = document.getElementById('numeroCaracteres')
const inputIncluiMaiuscula = document.getElementById('incluirMaiuscula')
const inputIncluiNumeros = document.getElementById('incluirNumeros')
const inputIncluiSimbolos = document.getElementById('incluirSimbolos')
const form = document.getElementById('formGeradorDeSenha')
const mostraSenha = document.getElementById('mostraSenha')

const MAIUSCULA_CHAR_CODES = menorProMaior(65, 90)
const MINUSCULA_CHAR_CODES = menorProMaior(97, 122)
const NUMEROS_CHAR_CODES = menorProMaior(48, 57)
const SIMBOLOS_CHAR_CODES = menorProMaior(33, 47).concat(
    menorProMaior(58, 64)
).concat(
    menorProMaior(91, 96)
).concat(
    menorProMaior(123, 126)
)



inputRangeCaracteres.addEventListener('input', sincronizaValor)
inputNumeroCaracteres.addEventListener('input', sincronizaValor)

form.addEventListener('submit', e => {
    e.preventDefault()
    const numeroCaracteres = inputNumeroCaracteres.value
    const incluiMaiuscula = inputIncluiMaiuscula.checked
    const incluiNumeros = inputIncluiNumeros.checked 
    const incluiSimbolos = inputIncluiSimbolos.checked
    const senha = geraSenha(numeroCaracteres, incluiMaiuscula, incluiNumeros, incluiSimbolos)
    mostraSenha.innerText = senha
})

function geraSenha(numeroCaracteres, incluiMaiuscula, incluiNumeros, incluiSimbolos) {
    let charCodes = MINUSCULA_CHAR_CODES
    if (incluiMaiuscula) charCodes = charCodes.concat(MAIUSCULA_CHAR_CODES)
    if (incluiNumeros) charCodes = charCodes.concat(NUMEROS_CHAR_CODES)
    if (incluiSimbolos) charCodes = charCodes.concat(SIMBOLOS_CHAR_CODES)

    const senhaCaracteres = []
    for (let i = 0; i < numeroCaracteres; i++) {
        const caracter = charCodes[Math.floor(Math.random() * charCodes.length)]
        senhaCaracteres.push(String.fromCharCode(caracter))
    }

    return senhaCaracteres.join('')
}

function sincronizaValor(e) {
    const valor = e.target.value
    inputRangeCaracteres.value = valor
    inputNumeroCaracteres.value = valor
}

function menorProMaior(menor, maior) {
    const array = []
    for (i = menor; i <= maior; i++){
        array.push(i)
    }

    return array
}
