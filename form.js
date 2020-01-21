var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event) {
  event.preventDefault();

  var form = document.querySelector('#form-adiciona');
  var paciente = obtemPacienteDoFormulario(form);

  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);

  form.reset();
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  };
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  var nomeTD = montaTd(paciente.nome, 'info-nome');
  var pesoTD = montaTd(paciente.peso, 'info-peso');
  var alturaTD = montaTd(paciente.altura, 'info-altura');
  var gorduraTD = montaTd(paciente.gordura, 'info-gordura');
  var imcTD = montaTd(paciente.imc, 'info-imc');

  pacienteTr.appendChild(nomeTD);
  pacienteTr.appendChild(pesoTD);
  pacienteTr.appendChild(alturaTD);
  pacienteTr.appendChild(gorduraTD);
  pacienteTr.appendChild(imcTD);

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
