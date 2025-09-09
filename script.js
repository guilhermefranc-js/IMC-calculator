    function clicar() {
     var kg = window.document.querySelector('#peso')
     var alt = window.document.querySelector('#altura')
     var res = window.document.querySelector('#hh1')
     var kilo = Number(kg.value)
     var taman = Number(alt.value)
    var s = kilo/taman

     var resultadoantigo = window.document.querySelector('#resultadoIMC')
    if (resultadoantigo) {
        res.removeChild(resultadoantigo);}

    var imc = s/taman
var mensagem = `<strong>Seu IMC é ${imc.toFixed(2)}</strong>`



if (isNaN(kilo) || isNaN(taman) || kilo<=0 || taman <=0) { // o uso de || significa OU//

var p = window.document.createElement('p')
p.style.background = 'rgb(31, 31, 31, 0.801)'
p.style.borderRadius = '8px'
p.style.color = 'white'
p.style.textAlign = 'center'
p.style.marginTop = '60px'
p.style.marginLeft = '0px'
p.style.textAlign = 'center'
p.style.height = '50px'
p.style.width = '450px'
p.id = 'resultadoIMC'
p.innerHTML = '⚠️Por favor, preencha os campos corretamente!'
res.appendChild(p);
return;}


if (imc < 18.5) {
mensagem +='<strong><br>Você está abaixo do peso⬇️</strong>'
} else if (imc < 25) {
mensagem += '<strong><br>Você está saudável💚</strong>'
} else if (imc < 30){
mensagem += '<strong><br>Você está com sobrepeso⚠️</strong>'
} else{
mensagem += '<strong><br>Você está com muito sobrepeso🚨</strong>'
} var p = window.document.createElement('p')
var p = window.document.createElement('p')
p.style.background = 'rgb(31,31,31, 0.801)'
p.style.borderRadius = '8px'
p.style.color = 'white'
p.style.textAlign = 'center'
p.style.marginTop = '60px'
p.style.marginLeft = '0px'
p.style.textAlign = 'center'
p.style.height = '50px'
p.style.width = '450px'
p.id = 'resultadoIMC'
p.innerHTML = mensagem
res.appendChild(p);}