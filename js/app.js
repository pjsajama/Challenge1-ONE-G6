const campo_texto = document.getElementById("caja-texto");
const campo_mensaje = document.getElementById("texto-resultado");

const matriz_code = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];

function btnEncriptar() {
    let texto = encriptar(campo_texto.value);
    console.log(texto);
    campo_mensaje.value = texto;
}

function btnDesencriptar() {
    let texto = desencriptar(campo_texto.value);
    console.log(texto);
    campo_mensaje.value = texto 
}

function encriptar(fraseEncriptada) {
    for (let i =0 ; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0], matriz_code[i][1]);
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseEncriptada) {
    for (let i =0 ; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][1])) {
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][1], matriz_code[i][0]);
        }
    }
    return fraseEncriptada
}

function btnCopiar() {
    campo_mensaje.select();
    navigator.clipboard.writeText(campo_mensaje.value);
}
