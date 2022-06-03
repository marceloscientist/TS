'use strict';

let button = <HTMLButtonElement> document.getElementById('button');
let input1 = <HTMLInputElement> document.getElementById('input1');
let input2 = <HTMLInputElement> document.getElementById('input2');

function somaSoma(num1: number, num2: number, devePrintar: boolean, frase: string) {
    let resultado = num1 + num2; 
    return (devePrintar)?console.log(frase + resultado): num1 + num2;
}

let devePrintar = true;
let frase = "O resultado é: "

button.addEventListener('click', ()=>{
    somaSoma(Number(input1.value),Number(input2.value), devePrintar, frase)
})