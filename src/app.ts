type n = number;

function soma
    (elem1: n, elem2: n, 
        callback:(value: n) => n
    ):n 
    {
        let resultado = elem1 + elem2;
        return callback(resultado); 
}

function nQuadrado(elem:n):n {
    return elem*elem;    
}

function nDivide(elem:n):n {
    return elem/elem;    
}

soma(4,5,nQuadrado);
soma(4,5,nDivide);
