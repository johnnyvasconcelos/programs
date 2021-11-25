let seuVoto = document.querySelector('.seu-voto span')
let cargo = document.querySelector('.tipo span')
let candidato = document.querySelector('.candidato')
let aviso = document.querySelector('.inicio')
let direita = document.querySelector('.direita')
let numeros = document.querySelector('.numeros')
aviso.innerHTML = "vereadores: 59000 | 68000 - prefeitos: 59 | 68"

let atualStage = 0
let nn = ''

function iniciarStage() {
    let stage = stages[atualStage]
    let numeroHtml = ''
    
for  (let i = 0; i < stage.numeros; i++) {
    if (i === 0) {
        numeroHtml += '<div class="num show" id="show"></div>'
    } else {
    numeroHtml += '<div class="num"></div>'
}
}
    seuVoto.style.display = 'none'
    cargo.innerHTML = stage.titulo
    candidato.innerHTML = ''
    aviso.style.display = 'block'
    direita.innerHTML = ''
    numeros.innerHTML = numeroHtml
}

function interface() {
    console.log(nn)
    let stage = stages[atualStage]
    let individuo = stage.candidatos.filter((item)=>{
if (item.numero == nn) {
    alert("ok")
    return true
} else {
    return false
}   
    })

    if (individuo.length > 0) {
        individuo = individuo[0]
        seuVoto.style.display = 'block'
        descricao.innerHTML = `Nome: ${individuo.nome}<br>Partido: ${individuo.partido}`
        let fotosHtml = ''
        for (let i in individuo.fotos) {
            fotosHtml += `<div class="direita-image"><img src="${individuo.fotos[i].url}">${individuo.fotos[i].legenda}</div>`
        }
        direita.innerHTML = fotosHtml
    }
}


function clickk(n) {
    var digito = document.querySelector('.num.show')
    digito.classList.remove('show')
    if (digito.nextElementSibling !== null) {
        digito.nextElementSibling.classList.add('show')
        } else {
            interface()
        }
    if (digito !== null) {
        digito.innerText = n
        nn += `${numero}${n}`
       
    } 
}

function branco() {
alert("clicou em BRANCO")
}

function corrige() {
    alert("clicou em CORRIGE")
}

function confirma() {
    alert("clicou em CONFIRMA")
}

iniciarStage()