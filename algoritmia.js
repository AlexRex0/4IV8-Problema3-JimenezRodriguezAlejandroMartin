var caracteresValidos = /[^ÑA-Z-,]/g;
var caracteresNoValidos = /^,|,(?=,)/g;
var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayCaracteresUnicos = [];

function enviar(){
    var valor = document.querySelector('.entrada').value;
    var validar = validacion(valor);
    if(validar){
        alert("Validacion aceptada");
        var textoDividido = dividirTexto(valor);
        var tamañoArray = textoDividido.length;
        for(i = 0; i < tamañoArray; i++){
            contadorCaracteresUnicos(textoDividido,i);
        }
        ponerGrande(textoDividido, arrayCaracteresUnicos);
        return false;
    }else{
        alert("Validacion rechazada")
        return false;
    }
}

function validacion(valor){
    var validacionComas = caracteresNoValidos.test(valor);
    if(valor==""){
        alert("Introduce texto para continuar")
    }else if(validacionComas==false){
        alert("Las comas estan bien");
        var validacionCaracteres = caracteresValidos.test(valor);
            if(validacionCaracteres==false){
                alert("El texto esta bien");
                validacionFinal = true;
            }else{
                alert("Introduce caracteres validos");
                document.querySelector('.entrada').value = "";
                validacionFinal = false;
            }
    }else{
        alert("No empieces con una coma y no la utilices dos veces seguidas sin una palabra de por medio");
        document.querySelector('.entrada').value = "";
        validacionFinal = false;
    }
    return validacionFinal;
}

function dividirTexto(valor){
    var textoDividido = valor.split(",");
    return textoDividido;
}

function contadorCaracteresUnicos(array, i){
    let caracteresUnicos = new Set(array[i]);
    arrayCaracteresUnicos[i] = caracteresUnicos.size;
}

function ponerGrande(array,array2) {
    let mayor = 0;
    let ind;
    for(i=0;i<array.length;i++){
        if(array2[i] > mayor){
            mayor = array2[i];
            ind = i;
        }
    }
    document.querySelector('.respuesta').value = array[ind];
}