//Manipulando Strings

let meuNome = "Sara Mitely Germano de Lima";

//Contando quantidade de caracteres - lenght
console.log(meuNome.length);

//Colocando um delimitador para separar a string em partes - Split
console.log(meuNome.split(" "));

//Substituindo alguma informação na string - Replace
console.log(meuNome.replace("Germano", "G."));

//Operadores de comparação de lógicos
const numero1 = 305,
    numero2 = 115;
const soma = 305 + 115,
    subtracao = 305 - 115,
    multiplicacao = 305 * 115,
    divisao = 305 / 115,
    moduloDaDivisao = 305 % 115;

//Estrutura condicional - If e Else
let hora = 15;
if (hora < 12){
    console.log('Bom dia!');
} else {
    console.log('Boa tarde!');
}

//exemplo 2
let a = 20,
    b = 20;

    if (a > b){
        console.log('a é maior que b');
    } else if (a < b){
        console.log ('a é menor que b');
    } else {
        console.log ('a é igual a b');
    }