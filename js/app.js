const campo_texto = document.getElementById("caja-texto");
const campo_mensaje = document.getElementById("texto-resultado");

const txt_encontrado1 = document.getElementById("texto-resultado");
const txt_encontrado2 = document.getElementById("btn-copiar");
const txt_no_encontrado1 = document.getElementById("muneco");
const txt_no_encontrado2 = document.getElementById("cartel1");
const txt_no_encontrado3 = document.getElementById("cartel2");

const matriz_code = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];

function btnEncriptar() {
    let texto = encriptar(campo_texto.value.toLowerCase());
    campo_mensaje.value = texto;
    mostrar();
}

function btnDesencriptar() {
    let texto = desencriptar(campo_texto.value.toLowerCase());
    campo_mensaje.value = texto;
    mostrar();
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
    no_mostrar();
}

function mostrar() {
    txt_encontrado1.style.display = "block";
    txt_encontrado2.style.display = "block";
    txt_no_encontrado1.style.display = "none";
    txt_no_encontrado2.style.display = "none";
    txt_no_encontrado3.style.display = "none";
    campo_texto.value = "";
}

function no_mostrar() {
    txt_encontrado1.style.display = "none";
    txt_encontrado2.style.display = "none";
    txt_no_encontrado1.style.display = "block";
    txt_no_encontrado2.style.display = "block";
    txt_no_encontrado3.style.display = "block";
    campo_mensaje.value = "";
    //alert("EL TEXTO ENCRIPTADO COPIADO SE BORRARÁ")
}