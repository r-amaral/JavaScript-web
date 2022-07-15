let paciente = document.querySelectorAll('.paciente');

for (let i = 0; i < paciente.length; i++) {
    let peso = paciente[i].querySelector('.info-peso').textContent;
    let altura = paciente[i].querySelector('.info-altura').textContent;
    let imc = paciente[i].querySelector('.info-imc');
    
    imc.textContent = calculadora(peso,altura);
}

function calculadora(peso,altura){
    let resultadoImc;
    return resultadoImc = (peso / (altura * altura)).toFixed(2);
}

