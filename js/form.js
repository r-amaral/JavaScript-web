let botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let pacienteObj = obtemPaciente(form);
    let erros = validaPaciente(pacienteObj);

    if (erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }

    adicionaObjetoNaTabela(pacienteObj);

    form.reset();

    let mensagemErro = document.querySelector("#mensagens-erro").innerHTML = '';
});


function adicionaObjetoNaTabela(pacienteObj) {
    let pacienteTr = criarTr(pacienteObj);
    let tbody = document.querySelector('#tabela-pacientes');
    tbody.appendChild(pacienteTr);

}

function exibeMensagemDeErro(array) {

    let ulErro = document.querySelector('#mensagens-erro');

    ulErro.innerHTML = '';

    array.forEach(item => {
        let liErro = document.createElement('li');

        liErro.textContent = item;

        ulErro.appendChild(liErro);
    });
}

function obtemPaciente(form) {
    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculadora(form.peso.value, form.altura.value)
    }
    return paciente;
}

function criarTr(paciente) {

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

function criarTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(pacienteObj) {

    var erros = [];

    if (pacienteObj.nome.length == 0) erros.push('O Nome não pode ser em branco')

    if (pacienteObj.gordura.length == 0) erros.push('A gordura não pode ser em branco')

    if (pacienteObj.peso.length == 0) erros.push('O peso não pode ser em branco')

    if (pacienteObj.altura.length == 0) erros.push('O altura não pode ser em branco')

    if (!validaAltura(pacienteObj.altura)) erros.push('Altura Invalida');

    if (!validaPeso(pacienteObj.peso)) erros.push('Peso Invalido');

    return erros;

}
