let seuVoto = document.querySelector('.seu-voto span')
let cargo = document.querySelector('.tipo span')
let candidato = document.querySelector('.candidato')
let aviso = document.querySelector('.inicio')
let direita = document.querySelector('.direita')
let numeros = document.querySelector('.numeros')
aviso.innerHTML = "vereadores: 59000 | 68000 - prefeitos: 59 | 68"
//Lista de candidatos
let candidato1 = ["5","9","0","0","0"]
let candidato1b = ["5","8","0","0","0"]
let candidato2 = ["6","8","0","0","0"]
let candidato2b = ["6","9","0","0","0"]
let candidato3 = ["5","9"]
let candidato3b = ["6","9"]
let candidato4 = ["6","8"]
let candidato4b = ["5","8"]
let imageArea = document.querySelector('.direita-image')
let imageArea2 = document.querySelector('.small')
let legenda = document.querySelector('.direita-image span')
let legenda2 = document.querySelector('.small span')
let perfil = document.querySelector('.perfilum')
let perfil2 = document.querySelector('.perfildois')

let atualStage = 0
let nn = []
let votoBranco = false

function iniciarStage() {
    let stage = stages[atualStage]
    let numeroHtml = ''
    votoBranco = false
    
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
       /* Vereadores */
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
} else if (nnn == candidato1b) {
    seuVoto.style.display = 'block'
   perfil.style.display = 'block'
   imageArea.style.display = 'block'
   candidato.style.display = 'block'
   candidato.innerHTML = '<span><br>Nome: Tito Teixeira<br>Partido: PTT</span>'
    perfil.setAttribute('src', 'vereador3.png')
    legenda.innerText = 'VEREADOR'
} else if (nnn == candidato2b) {
    seuVoto.style.display = 'block'
   perfil.style.display = 'block'
   imageArea.style.display = 'block'
   candidato.style.display = 'block'
   candidato.innerHTML = '<span><br>Nome: Marta Silveira<br>Partido: PMS</span>'
    perfil.setAttribute('src', 'vereador4.png')
    legenda.innerText = 'VEREADORA'
} /* Prefeitos */ 
else if (nnn == candidato3) {
    seuVoto.style.display = 'block'
    perfil.style.display = 'block'
    perfil2.style.display = 'block'
    imageArea.style.display = 'block'
    imageArea2.style.display = 'block'
    candidato.style.display = 'block'
    candidato.innerHTML = '<span><br>Nome: Miranda Costa<br>Partido: PMC<br>Vice: Mirandir Cunha</span>'
     perfil.setAttribute('src', 'prefeito2.png')
     perfil2.setAttribute('src', 'vice2.png')
     legenda.innerText = 'PREFEITO'
     legenda2.innerText = 'VICE-PREFEITO'
} else if (nnn == candidato3b) {
    seuVoto.style.display = 'block'
    perfil.style.display = 'block'
    perfil2.style.display = 'block'
    imageArea.style.display = 'block'
    imageArea2.style.display = 'block'
    candidato.style.display = 'block'
    candidato.innerHTML = '<span><br>Nome: Himoto Takamura<br>Partido: PHT<br>Vice: Lina Takamura</span>'
     perfil.setAttribute('src', 'prefeito3.png')
     perfil2.setAttribute('src', 'vice3.png')
     legenda.innerText = 'PREFEITO'
     legenda2.innerText = 'VICE-PREFEITA'
} else if (nnn == candidato4) {
    seuVoto.style.display = 'block'
    perfil.style.display = 'block'
    perfil2.style.display = 'block'
    imageArea.style.display = 'block'
    imageArea2.style.display = 'block'
    candidato.style.display = 'block'
    candidato.innerHTML = '<span><br>Nome: Luma Santos<br>Partido: PLS<br>Vice: Lamar Silva</span>'
     perfil.setAttribute('src', 'prefeito1.png')
     perfil2.setAttribute('src', 'vice1.png')
     legenda.innerText = 'PREFEITA'
     legenda2.innerText = 'VICE-PREFEITO'
} else if (nnn == candidato4b) {
    seuVoto.style.display = 'block'
    perfil.style.display = 'block'
    perfil2.style.display = 'block'
    imageArea.style.display = 'block'
    imageArea2.style.display = 'block'
    candidato.style.display = 'block'
    candidato.innerHTML = '<span><br>Nome: Costa Neves<br>Partido: PCN<br>Vice: Cabo Noronha</span>'
     perfil.setAttribute('src', 'prefeito4.png')
     perfil2.setAttribute('src', 'vice4.png')
     legenda.innerText = 'PREFEITO'
     legenda2.innerText = 'VICE-PREFEITO'
}

else {
    seuVoto.style.display = 'block'
    candidato.style.display = 'block'
    candidato.innerHTML = '<div class="nulo show">VOTO NULO</div>'
}
    })

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
if (nn == '') {
    votoBranco = true
    seuVoto.style.display = 'block'
    numeros.innerHTML = ''
    candidato.style.display = 'block'
    candidato.innerHTML = '<div class="nulo show">VOTO EM BRANCO</div>'
} else {
    alert('Corrija o seu voto antes de votar em BRANCO')
}
}

function corrige() {
    iniciarStage()
   nn = []
}

function confirma() {
    let votoConfirma = false
    let stage = stages[atualStage]
    if (votoBranco == true) {
        votoConfirma = true
        alert('ok')
    } else if (nn.length === stage.numeros) {
        votoConfirma = true
    } if (votoConfirma) {
        atualStage ++
        if (stages[atualStage] !== undefined) {
            iniciarStage()
            nn = []
        } else {
            seuVoto.style.display = 'none'
    numeros.innerHTML = ''
    candidato.style.display = 'block'
    direita.style.display = 'none'
    cargo.style.display = 'none'
    candidato.innerHTML = '<div class="fim">FIM</div>'
        }
    }
}

iniciarStage()