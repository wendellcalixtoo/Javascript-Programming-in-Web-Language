var paciente = document.querySelector('#primeiroPaciente');

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc")

var pesoValido = true;
var alturaValida = true;


if(peso < 0 || peso > 1000){
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!"
}

if(altura < 0 || altura > 3.00){
    console.log("Altura inválido!");
    alturaValida = false;
    tdImc.textContent = "Altura inválido!"
}

if (alturaValida && pesoValido){
    var imc = peso / (altura*altura);
    tdImc.textContent = imc;
}

