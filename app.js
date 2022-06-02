"use strict";
const pessoa = {
    nome: "Joao",
    idade: 26,
    profissao: "Limpador"
};
const maria = {
    nome: "Maria",
    idade: 34,
    profissao: "Jegger"
};
const penpa = {
    nome: "Penpa",
    idade: 54,
    profissao: "jegger"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Jegger"] = 0] = "Jegger";
    Profissao[Profissao["Plabba"] = 1] = "Plabba";
    Profissao[Profissao["Beijji"] = 2] = "Beijji";
})(Profissao || (Profissao = {}));
const johnny = {
    nome: 'Mandão',
    idade: 90,
    profissao: Profissao.Beijji
};
var Materia;
(function (Materia) {
    Materia[Materia["Matematica"] = 0] = "Matematica";
    Materia[Materia["Portugues"] = 1] = "Portugues";
    Materia[Materia["Ciencias"] = 2] = "Ciencias";
    Materia[Materia["Religiao"] = 3] = "Religiao";
})(Materia || (Materia = {}));
const gustavo = {
    nome: 'Gustavo',
    idade: 14,
    materias: [Materia.Ciencias, Materia.Matematica, Materia.Portugues]
};
function listar(lista) {
    for (let item of lista) {
        console.log(' ' + Materia[item]);
    }
}
listar(gustavo.materias);
