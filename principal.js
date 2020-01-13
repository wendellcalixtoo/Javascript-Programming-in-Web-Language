var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;
  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;
  var tdImc = paciente.querySelector('.info-imc');

  var pesoValido = true;
  var alturaValida = true;

  if (peso < 0 || peso > 1000) {
    console.log('Peso inválido!');
    pesoValido = false;
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('paciente-invalido');
  }

  if (altura < 0 || altura > 3.0) {
    console.log('Altura inválido!');
    alturaValida = false;
    tdImc.textContent = 'Altura inválido!';
    paciente.style.backgroundColor = 'lightcoral';
    paciente.classList.add('paciente-invalido');
  }

  if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event) {
  event.preventDefault();

  var form = document.querySelector('#form-adiciona');

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement('tr');

  var nomeTD = document.createElement('td');
  var pesoTD = document.createElement('td');
  var alturaTD = document.createElement('td');
  var gorduraTD = document.createElement('td');
  var imcTD = document.createElement('td');

  nomeTD.textContent = nome;
  pesoTD.textContent = peso;
  alturaTD.textContent = altura;
  gorduraTD.textContent = gordura;

  pacienteTr.appendChild(nomeTD);
  pacienteTr.appendChild(pesoTD);
  pacienteTr.appendChild(alturaTD);
  pacienteTr.appendChild(gorduraTD);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

});
