/* Seleccionar Elementos del DOM*/

const boton = document.querySelector('button');
const color = document.getElementById('color');

/* Función que genera el texto de un color aleatorio*/
function genColorRandomHex() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random()*16);
        colorHex += digitos[indiceAleatorio];
    };

    return colorHex;
}

/* Función que actualiza el color como texto y como color de fondo */

function actualizarColorYTexto (){
    let colorAleatorio = genColorRandomHex();
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
}

/* Listener */

boton.addEventListener('click', actualizarColorYTexto);
