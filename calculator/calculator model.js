

var audio = document.querySelector('.audio2')
var audio2 = document.querySelector('audio')
var audio3 = document.querySelector('.audio3')

function pegaHistorico() {
return document.getElementById('resultado').innerText
}

function mostraHistorico(n) {
document.getElementById('resultado').innerText = n
}

function pegaTela() {
return document.getElementById('tela').innerText
}

function mostraTela(n) {
if (n == "") {
document.getElementById('tela').innerText = num
} else {
document.getElementById('tela').innerText = pegarNumero(n)
}
}

function pegarNumero(n) {
var num = Number(n)
var value = num.toLocaleString("en")
return value
}

function reversor(n) {
if (n == "-") {
return "0"
}
return Number(n.replace(/,/g,''))
}

var operadores = document.getElementsByClassName('operador')

for (let i = 0; i < operadores.length; i++) {
operadores[i].addEventListener('click', function() {
if (this.id == "limpar") {
mostraTela(" ")
mostraHistorico(" ")
}
else if (this.id == "apagar") {
var res = reversor(pegaTela()).toString()
if (res) {
res = res.substr(0,res.length-1)
if (res.length < 1) {
mostraTela(" ")
}
mostraTela(res)
}
} else {
var res = pegaTela()
var historico = pegaHistorico()
if (res == "" && historico != "") {
if (isNaN(historico[historico.length - 1])) {
historico = historico.substr(0, historico.length - 1)
}
}

if (res != "" || historico != "") {
res = res == "" ? res : res = reversor(res)
historico = historico + res
if (this.id == "=") {
mostraTela("0")
var resultado = eval(historico)
mostraTela(resultado)
mostraHistorico("")
} else {
historico = historico + this.id
mostraHistorico(historico)
mostraTela("0")
}
}
}
})
}

var numeros = document.getElementsByClassName('numero')

for (let i = 0; i < numeros.length; i++) {
numeros[i].addEventListener('click', function() {
var res = reversor(pegaTela())
if (res != NaN) {
res = res + this.id
mostraTela(res)
}
})
}

// sound

var power = document.querySelector('input')
power.checked = false
var volumeUp = document.querySelector('.fa-volume-up')
var volumeMute = document.querySelector('.volume-mute')
let tec1 = document.querySelector('#tec1');
let tec2 = document.querySelector('#tec2');
let tec3 = document.querySelector('#tec3');
let tec4 = document.querySelector('#tec4');
let tec5 = document.querySelector('.tec5');
let tec6 = document.querySelector('.tec6');
let tec7 = document.querySelector('.tec7');
let tec8 = document.querySelector('.tec8');
let tec9 = document.querySelector('.tec9');
let tec10 = document.querySelector('.tec10');
let tec11 = document.querySelector('.tec11');
let tec12 = document.querySelector('.tec12');
let tec13 = document.querySelector('.tec13');
let tec14 = document.querySelector('.tec14');
let tec15 = document.querySelector('.tec15');
let tec16 = document.querySelector('.tec16');
let tec17 = document.querySelector('.tec17');
let tec18 = document.querySelector('.tec18');
let tec19 = document.querySelector('.tec19');
let tec20 = document.querySelector('.tec20');
let tec21 = document.querySelector('.tec21');
let tec22 = document.querySelector('.tec22');
let tec23 = document.querySelector('.tec23');
let tec24 = document.querySelector('.tec24');

volumeUp.addEventListener('click', function() {
volumeUp.setAttribute('style', 'display:none')
volumeMute.setAttribute('style', 'display:inline-block!important')
tec1.removeAttribute("onclick")
tec2.removeAttribute("onclick")
tec3.removeAttribute("onclick")
tec4.removeAttribute("onclick")
tec5.removeAttribute("onclick")
tec6.removeAttribute("onclick")
tec7.removeAttribute("onclick")
tec8.removeAttribute("onclick")
tec9.removeAttribute("onclick")
tec10.removeAttribute("onclick")
tec11.removeAttribute("onclick")
tec12.removeAttribute("onclick")
tec13.removeAttribute("onclick")
tec14.removeAttribute("onclick")
tec15.removeAttribute("onclick")
tec16.removeAttribute("onclick")
tec17.removeAttribute("onclick")
tec18.removeAttribute("onclick")
tec19.removeAttribute("onclick")
tec20.removeAttribute("onclick")
tec21.removeAttribute("onclick")
tec22.removeAttribute("onclick")
tec23.removeAttribute("onclick")
tec24.removeAttribute("onclick")
})

volumeMute.addEventListener('click', function() {
volumeMute.setAttribute('style', 'display:none')
volumeUp.setAttribute('style', 'display:inline-block')
tec1.setAttribute('onclick', 'audio3.play();')
tec2.setAttribute('onclick', 'audio3.play();')
tec3.setAttribute('onclick', 'audio3.play();')
tec4.setAttribute('onclick', 'audio3.play();')
tec5.setAttribute('onclick', 'audio2.play();')
tec6.setAttribute('onclick', 'audio2.play();')
tec7.setAttribute('onclick', 'audio2.play();')
tec8.setAttribute('onclick', 'audio2.play();')
tec9.setAttribute('onclick', 'audio.play();')
tec10.setAttribute('onclick', 'audio.play();')
tec11.setAttribute('onclick', 'audio.play();')
tec12.setAttribute('onclick', 'audio2.play();')
tec13.setAttribute('onclick', 'audio.play();')
tec14.setAttribute('onclick', 'audio.play();')
tec15.setAttribute('onclick', 'audio.play();')
tec16.setAttribute('onclick', 'audio2.play();')
tec17.setAttribute('onclick', 'audio.play();')
tec18.setAttribute('onclick', 'audio.play();')
tec19.setAttribute('onclick', 'audio.play();')
tec20.setAttribute('onclick', 'audio2.play();')
tec21.setAttribute('onclick', 'audio.play();')
tec22.setAttribute('onclick', 'audio.play();')
tec23.setAttribute('onclick', 'audio.play();')
tec24.setAttribute('onclick', 'audio2.play();')
})

power.addEventListener('click', function() {
if (power.checked == 1) {
audio = 0
audio2 = 0
audio3 = 0
} if (power.checked == 0) {
audio2 = document.querySelector('audio')
audio = document.querySelector('.audio2')
audio3 = document.querySelector('.audio3')

}
})
