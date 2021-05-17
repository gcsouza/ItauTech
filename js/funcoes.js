var recuperarNome = "";
var recuperarCPF = "";
var recuperarRG = "";
var recuperarEndereco = "";
var recuperarNumero = "";
var recuperarSexo = "";
var recuperarBairro = "";
var recuperarCidade = "";
var recuperarEstado = "";
var recuperarCEP = "";
var recuperarFixo = "";
var recuperarCelular = "";

function capturar () {
    recuperarNome = document.getElementById('nome').value;
    recuperarCPF = document.getElementById('cpf').value;
    recuperarRG = document.getElementById('rg').value;
    recuperarEndereco = document.getElementById('endereco').value;
    recuperarNumero = document.getElementById('numero').value;
    recuperarSexo = document.getElementById('sexo').value;
    recuperarBairro = document.getElementById('bairro').value;
    recuperarCidade = document.getElementById('cidade').value;
    recuperarEstado = document.getElementById('estado').value;
    recuperarCEP = document.getElementById('cep').value;
    recuperarFixo = document.getElementById('fixo').value;
    recuperarCelular = document.getElementById('celular').value;

    document.getElementById('nomeDigitado').innerHTML = recuperarNome;
    document.getElementById('CPFDigitado').innerHTML = recuperarCPF;
    document.getElementById('rgDigitado').innerHTML = recuperarRG;
    document.getElementById('enderecoDigitado').innerHTML = recuperarEndereco;
    document.getElementById('numeroDigitado').innerHTML = recuperarNumero
    document.getElementById('sexoDigitado').innerHTML = recuperarSexo;
    document.getElementById('bairroDigitado').innerHTML = recuperarBairro;
    document.getElementById('cidadeDigitado').innerHTML = recuperarCidade;
    document.getElementById('estadoDigitado').innerHTML = recuperarEstado;
    document.getElementById('cepDigitado').innerHTML = recuperarCEP;
    document.getElementById('fixoDigitado').innerHTML = recuperarFixo;
    document.getElementById('celularDigitado').innerHTML = recuperarCelular;
}


function limpar(){
     formulario.nome.value = '';
     formulario.cpf.value = '';
     formulario.rg.value = '';
     formulario.endereco.value = '';
     formulario.numero.value = '';
     formulario.sexo.value = '';
     formulario.bairro.value = '';
     formulario.cidade.value = '';
     formulario.estado.value = estado;
     formulario.cep.value = '';
     formulario.fixo.value = '';
     formulario.celular.value = '';
    }

function validarCampos(){
    
    var nome = formulario.nome.value
    if (nome == ""){
        alert('Preencha o nome!');
        formulario.nome.focus();
        return false();
    }

    var cpf = formulario.cpf.value
    if (cpf == ""){
        alert('Preencha o CPF!');
        formulario.cpf.focus();
        return false();
    }

    var endereco = formulario.endereco.value
    if (endereco == ""){
        alert('Preencha o Endereço!');
        formulario.endereco.focus();
        return false();
    }

    var numero = formulario.numero.value
    if (numero == ""){
        alert('Preencha o número!');
        formulario.numero.focus();
        return false();
    }

    var celular = formulario.celular.value
    if (celular == ""){
        alert('Preencha o celular!');
        formulario.celular.focus();
        return false();
    }

    if (formulario.nome.value != ""  && formulario.cpf.value != "" && formulario.endereco != "" && formulario.numero.value !="" && formulario.celular.value != "" ){
        capturar();
        alert('Formulário preenchido com sucesso!');    
        limpar();     
    } 
}

