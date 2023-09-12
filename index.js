//aula condicional
let condicao1 = false;
if (condicao1){
    console.log('Entrei no if 1!');
}

let condicao2 = true;
if (condicao2){
    console.log('Entrei no if 2!');
}

//Exercicio
function numeros(num1, num2){
    if (num1 === num2){
        return "Sucesso";
    }
}
console.log(numeros(2,2));

//if + else: todo o codigo da ação vai entre chaves{}
let condicao = false;

if (condicao){
    console.log('Entrei no if');
} else{
    console.log('Entrei no else');
}

//exercicio
function numeros2(numero1, numero2){
    if (numero1 === numero2){
        return "iguais";
    } else {
        return "diferentes";
    }
} 
console.log(numeros2(
    Number(prompt("Digite o primeiro numero")),
    Number(prompt("Digite o segundo numero"))
));

//if + else + if
let cond1 = false;
let cond2 = true;

if (cond1){
    console.log('entrei no if 1')
} else if (cond2) {
        console.log('entrei no if 2!')
    }

//if + else if + else
let condicaoB = false;
let condicaoC = false;

if (condicaoB){
    console.log('entrei no if 1')
} else if (condicaoC) {
    console.log('entrei no if 2')
} else {
    console.log('entrei no else')
}

//exercicio
function numeros2(number1, number2){
    if (number1 === number2){
        return "iguais";
    } else if (number1 > number2) {
        return "Primeiro > segundo";
    } else {
    return "Primeiro < Segundo";
    }
} 

console.log(numeros2(
    Number(prompt("Digite o primeiro numero")),
    Number(prompt("Digite o segundo numero"))
));

//continuação
let paisOrigem
if (paisOrigem === 'Brasil'){
    console.log('brasileiro')
} else if (paisOrigem === 'EUA'){
    console.log('norte americano')
} else if (paisOrigem === 'Inglaterra'){
    console.log('ingles')
} else if (paisOrigem === 'França'){
    console.log('frances')
} else if (paisOrigem === 'Italia'){
    console.log("Italiano")
} else if (paisOrigem === 'Canada'){
    console.log('Canadense')
} else {
    console.log('nacionalidade não encontrada.')
}

//switch
let paisOrigem1
switch (paisOrigem1){
    case 'Brasil':
        console.log('brasileiro')
        break
    case 'EUA':
        console.log('norte americano')
        break
    case 'inglaterra':
        console.log('ingles')
        break 
    default:
        console.log('nacionalidade não encontrada.')
        break 
}

//exercicio
let pokemon = prompt("Escola um pokemon: Bulbasauro, Charmander, Squirtle").toLocaleLowerCase()
switch (pokemon){
    case ('Bulbasauro').toLocaleLowerCase():
        console.log('Bulbasauro (Planta e Veneno)')
        break
    case ('Charmander').toLocaleLowerCase():
        console.log('Charmander (Fogo)')
        break
    case ('Squirtle').toLocaleLowerCase():
        console.log('Squirtle (Agua)')
        break
    default:
        console.log('pokemon não encontrado')
        break
}
