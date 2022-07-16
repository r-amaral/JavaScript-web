let paciente = document.querySelectorAll('.paciente');

for (let i = 0; i < paciente.length; i++) {

    let peso = paciente[i].querySelector('.info-peso').textContent;
    let altura = paciente[i].querySelector('.info-altura').textContent;
    let imc = paciente[i].querySelector('.info-imc');

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    imc.textContent = calculadora(peso, altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        imc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        imc.textContent = 'Altura inválida"';
        paciente.classList.add('paciente-invalido');
    }
}

function calculadora(peso, altura) {
    let resultadoImc;
    return resultadoImc = (peso / (altura * altura)).toFixed(2);
}

function validaAltura(altura) {
    if (altura < 3.0 && altura >= 0) {
        return true;
    } else {
        return false;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
