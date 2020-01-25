var campoFiltro = document.querySelector('#filtrar-tabela'); //pego o que tem dentro do input com ID "filtrar-tabela"

campoFiltro.addEventListener('input', function() {
  console.log(this.value);
  var pacientes = document.querySelectorAll('.paciente');

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector('.info-nome');
      var nome = tdNome.textContent;

      var expressao = new RegExp(this.value, 'i');

      !expressao.test(nome)
        ? paciente.classList.add('invisivel')
        : paciente.classList.remove('invisivel');
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove('invisivel');
    }
  }
});
