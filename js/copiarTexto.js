var botaoCopiar = document.getElementById("copiar");
var resultado = document.getElementById("resultado");

function copiar(){
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado com sucesso!"); 
}

botaoCopiar.onclick = copiar;