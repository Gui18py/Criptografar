let caracter =  [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

function criptografar(texto){

    for(let k = 0; k < caracter.length; k++){
        if(texto.includes(caracter[k][0])){
            
            texto = texto.replaceAll(caracter[k][0], caracter[k][1]);
        }   
    }

    return texto;

}

function descriptografar(texto){

    for(let k = 0; k < caracter.length; k++){
        if(texto.includes(caracter[k][1])){
            
            texto = texto.replaceAll(caracter[k][1], caracter[k][0]);
        }   
    }

    return texto;

}


function mostrarCriptografia(){

    resultado.textContent = criptografar(textoEscrito.value);

}

function mostrarDescriptografia(){

    resultado.textContent = descriptografar(textoEscrito.value);
}

var textoEscrito = document.getElementById("textoescrito");
var resultado = document.getElementById("resultado");
var botaoCriptografar = document.getElementById("Criptografar");
var botaoDescriptografar = document.getElementById("Descriptografar");

botaoCriptografar.onclick = mostrarCriptografia;
botaoDescriptografar.onclick = mostrarDescriptografia;