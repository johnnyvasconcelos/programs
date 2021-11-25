let seuVoto = document.querySelector('.seu-voto span')
let cargo = document.querySelector('.tipo span')
let candidato = document.querySelector('.candidato')
let aviso = document.querySelector('.inicio')
let direita = document.querySelector('.direita')
let numeros = document.querySelector('.numeros')
aviso.innerHTML = "vereadores: 59000 | 68000 - prefeitos: 59 | 68"
let candidato1 = ["5","9","0","0","0"]
let candidato2 = ["6","8","0","0","0"]
let imageArea = document.querySelector('.direita-image')
let imageArea2 = document.querySelector('.small')
let legenda = document.querySelector('.direita-image span')
let perfil = document.querySelector('.perfilum')
let perfil2 = document.querySelector('.perfildois')

let atualStage = 0
let nn = []

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
    perfil.style.display = 'none'
    perfil2.style.display = 'none'
    aviso.style.display = 'block'
    numeros.innerHTML = numeroHtml
    candidato.style.display = 'none'
    imageArea.style.display = 'none'
    imageArea2.style.display = 'none'
}

function interface() {
    let stage = stages[atualStage]
    let individuo = stage.candidatos.filter((elemento)=>{
        nnn = nn.toString()
       
if (/*elemento.numero == nnn*/nnn == candidato1) {
    seuVoto.style.display = 'block'
   perfil.style.display = 'block'
   imageArea.style.display = 'block'
   candidato.style.display = 'block'
   candidato.innerHTML = '<span><br>Nome: Lívio Silva<br>Partido: PLS</span>'
    perfil.setAttribute('src', 'vereador1.png')
    legenda.innerText = 'VEREADOR'
} else if (nnn == candidato2) {
    seuVoto.style.display = 'block'
   perfil.style.display = 'block'
   imageArea.style.display = 'block'
   candidato.style.display = 'block'
   candidato.innerHTML = '<span><br>Nome: Maurícia Campos<br>Partido: PMC</span>'
    perfil.setAttribute('src', 'vereador2.png')
    legenda.innerText = 'VEREADORA'
}
    })

    if (individuo.length < 0) {
        alert('ok')
        individuo = individuo[0]
        seuVoto.style.display = 'block'
        let fotosHtml = ''
        for (let i in individuo.fotos) {
            fotosHtml += `<div class="direita-image"><img src="${individuo.fotos[i].url}">${individuo.fotos[i].legenda}</div>`
        }
    }
}


function clickk(n) {
    nn.push(n)
    var digito = document.querySelector('.num.show')
    digito.classList.remove('show')
  
    if (digito.nextElementSibling !== null) {
        digito.nextElementSibling.classList.add('show')
        } else {
            interface()
        }
    if (digito !== null) {
        digito.innerText = n
         //nn = `${numero}${n}`
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