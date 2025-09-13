function clicar() {
    var kg = window.document.querySelector('#peso');
    var alt = window.document.querySelector('#altura');
    // CORREÇÃO: Aponta para o card principal, que existe no seu HTML
    var res = window.document.querySelector('.calculator-card');
    
    var kilo = Number(kg.value);
    var taman = Number(alt.value);

    // Remove o resultado de um cálculo anterior, se houver
    var resultadoantigo = window.document.querySelector('#resultadoIMC');
    if (resultadoantigo) {
        res.removeChild(resultadoantigo);
    }

    var imc = kilo / (taman * taman);
    var mensagem; // A mensagem será definida a seguir

    // Validação da entrada
    if (isNaN(kilo) || isNaN(taman) || kilo <= 0 || taman <= 0) { // o uso de || significa OU//
        mensagem = '⚠️Por favor, preencha os campos corretamente!';
    } else {
        // Se a entrada for válida, calcula e classifica o IMC
        mensagem = `<strong>Seu IMC é ${imc.toFixed(2)}</strong>`;

        if (imc < 18.5) {
            mensagem += '<strong><br>Você está abaixo do peso⬇️</strong>';
        } else if (imc < 25) {
            mensagem += '<strong><br>Você está saudável💚</strong>';
        } else if (imc < 30) {
            mensagem += '<strong><br>Você está com sobrepeso⚠️</strong>';
        } else {
            mensagem += '<strong><br>Você está com muito sobrepeso🚨</strong>';
        }
    }
    
    // Cria e estiliza o parágrafo de resultado
    var p = window.document.createElement('p');
    p.style.background = 'rgb(31, 31, 31, 0.801)';
    p.style.borderRadius = '8px';
    p.style.color = 'white';
    p.style.textAlign = 'center';
    p.style.marginTop = '20px'; 
    p.style.padding = '10px';  
    p.style.width = '100%';     
    p.id = 'resultadoIMC';  
    
    // Insere a mensagem (seja de erro ou de sucesso) no parágrafo
    p.innerHTML = mensagem;
    
    // Adiciona o parágrafo com o resultado ao card
    res.appendChild(p);
}