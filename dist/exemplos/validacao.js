"use strict";
button = document.getElementById('button');
input1 = document.getElementById('input1');
input2 = document.getElementById('input2');
function somarNumeros(num1, num2) {
    return Number(num1) + Number(num2);
}
button.addEventListener('click', () => {
    console.log(somarNumeros(input1.value, input2.value));
});
