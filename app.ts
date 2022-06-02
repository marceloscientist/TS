const pessoa = {
    nome: "Joao",
    idade: 26,
    profissao: "Limpador"
}

const maria : {nome: string, idade: number, profissao: string} = {
    nome: "Maria",
    idade: 34, 
    profissao: "Jegger"
}

const penpa = {
    nome: "Penpa",
    idade: 54, 
    profissao: "jegger"
}

enum Profissao {
    Jegger, 
    Plabba, 
    Beijji
}

interface Pessoa {
    nome: string,
    idade: number, 
    profissao?: Profissao
}

const johnny: Pessoa = {
    nome: 'Mandão',
    idade: 90,
    profissao: Profissao.Beijji
}

enum Materia {
    Matematica,
    Portugues,
    Ciencias, 
    Religiao
}
interface Estudante extends Pessoa {
    materias: Materia[]
}

const gustavo =  {
    nome: 'Gustavo',
    idade: 14,
    materias: [Materia.Ciencias, Materia.Matematica, Materia.Portugues]
}

function listar(lista: Materia[]) {
    for(let item of lista) {
        console.log(' ' + Materia[item])
    }
}

listar(gustavo.materias);

