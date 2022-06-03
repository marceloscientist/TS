button = document.getElementById('button') as HTMLButtonElement;
input1 = document.getElementById('input1') as HTMLInputElement;
input2 = document.getElementById('input2') as HTMLInputElement;

function somarNumeros(num1: input, num2: input): number {
    return Number(num1) + Number(num2);
}

button.addEventListener('click', () => {
   console.log(somarNumeros(input1.value, input2.value));
});
