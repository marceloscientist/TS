'use strict';
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somarNumeros(num1, num2, devePrintar, frase) {
    let resultado = num1 + num2;
    return (devePrintar) ? console.log(frase + resultado) : num1 + num2;
}
let devePrintar = true;
let frase = "O resultado é: ";
button.addEventListener('click', () => {
    somarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase);
});
