let paciente = document.querySelectorAll('.paciente');

for (let i = 0; i < paciente.length; i++) {
    let peso = paciente[i].querySelector('.info-peso').textContent;

    let altura = paciente[i].querySelector('.info-altura').textContent;

    let imc = paciente[i].querySelector('.info-imc');

    imc.textContent = (peso / (altura * altura)).toFixed(2);
}

var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    let paciente = document.createElement('tr');
    let nomeTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');
    let imcTd = document.createElement('td');

    paciente.classList.add('paciente');
    nomeTd.classList.add('info-nome');
    pesoTd.classList.add('info-peso');
    alturaTd.classList.add('info-altura');
    gorduraTd.classList.add('info-gordura');
    imcTd.classList.add('info-imc');

    nomeTd.textContent = form.nome.value;
    pesoTd.textContent = form.peso.value;
    alturaTd.textContent = form.altura.value;
    gorduraTd.textContent = form.gorduraTd.value;


});



