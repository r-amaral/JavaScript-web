let botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    let pacienteObj = obtemPaciente(form);
    let pacienteTr = criarTr(pacienteObj);
    let tbody = document.querySelector('#tabela-pacientes');

    tbody.appendChild(pacienteTr);

    form.reset();
});

function obtemPaciente(form){
    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura:form.altura.value,
        gordura: form.gordura.value,
        imc: calculadora(form.peso.value, form.altura.value) 
    }
    return paciente;
}

function criarTr(paciente){

    let pacienteTr = document.createElement('tr');

    let nomeTd = criarTd(paciente.nome, 'info-nome');
    let pesoTd = criarTd(paciente.peso, 'info-peso');
    let alturaTd = criarTd(paciente.altura, 'info-altura');
    let gorduraTd = criarTd(paciente.gordura, 'info-gordura');
    let imcTd = criarTd(paciente.imc, 'info-imc');

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function criarTd(dado, classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}