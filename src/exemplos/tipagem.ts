type input = number | string;

function somando(elem1: input, elem2: input) {
    return ((typeof elem1 || typeof elem1 ) == "string")?
        elem1.toString() + elem2.toString():
        Number(elem1) + Number(elem2);
}

console.log(somando("4o ", "teste"));
console.log(somando("4", 5));
console.log(somando(4, 5));