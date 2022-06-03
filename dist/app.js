"use strict";
function soma(elem1, elem2, callback) {
    let resultado = elem1 + elem2;
    return callback(resultado);
}
function nQuadrado(elem) {
    return elem * elem;
}
function nDivide(elem) {
    return elem / elem;
}
soma(4, 5, nQuadrado);
soma(4, 5, nDivide);
