//Exercício 01 - concluído

const meuNome = "Sara Mitely",
    cidadeNatal = "Recife",
    anoNascimento = 1997;

let profissao = "Desenvolvedora";

console.log( meuNome + " " + cidadeNatal + " " + anoNascimento + " " + profissao);
//Na teoria, o valor da constante não pode ser alterado, apenas as variáveis (entende-se pelo próprio nome).

//Exercício 02 - concluído
const algumNome = "Mariana"
    idade = 40;

let nomeUm = "32"
    profissão = "desenvolvedora";
/*Para escrever textos, sempre colocar as "aspas". Quando for definir a constante ou variável que seja com dois nomes, iniciar a segunda
palavra com letra maíscula. Colocar o igual após o nome da contante ou variável. Separar com vírgulas ou ponto e vígula, quando necessário.
Números não precisam ser definidos com aspas.
*/

//Exercício 03 - concluído

let a = 5
    b = 8;

const areaRetangulo = a * b
    perimetroRetangulo = a + a + b + b;

console.log(areaRetangulo);
console.log(perimetroRetangulo);

//Exercício 04 - concluído
//Resposta seriam o trecho 02 e trecho 04 que vão rodar "folia"

//Exercício 05 - concluído

const c = 1988
    d = 2023;

const nome = "Shuri"
    anodeNascimento = d - c;
    profissao = "Super Heroína"
    frase = "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";

console.log(`Olá! Eu me chamo ${nome}, sou ${profissao}, tenho ${anodeNascimento} anos e tenho algo para te dizer: ${frase}`);

//Exercício 06 - concluído

let diaSemana = "quarta-feira";

if (diaSemana = "segunda-feira" || "terça-feira" || "quarta-feira" || "quinta-feira" || "sexta-feira")
    console.log('Oba, mais um dia de aprendizado em JavaScript!');
else 
    console.log('Bom final de semana!');

//Exercício 07 - concluído com auxílio

const batata = true
    sorvete = true;

if (batata === true && sorvete === true)
    console.log('Eita que delícia!');
else
   console.log('Ops... Não foi exatamente o que pedi!');

//Exercício 08 - concluído

let nota = 50;

if (nota < 60)
   console.log('Infelizmente, você não atingiu a pontuação necessária.');
else if (nota >= 80)
    console.log('Parabéns, você foi aprovada!');
else
    console.log('Você está em nossa lista de espera.')

//Exercício 09 - respondido com auxílio

const nummer01 = 5
    nummer02 = 9;

if (nummer01 > nummer02)
    console.log(`${nummer01} é o maior!`);
else
    console.log(`${nummer02} é o maior!`);

//Exercício 10 - concluído

const nummer03 = 7
    nummer04 = 2
    nummer05 = 8;

if (nummer03 > nummer04 > nummer05)
    console.log(`${nummer03} é o maior`);
else if (nummer04 > nummer03 > nummer05)
    console.log(`${nummer04} é o maior`);
else
    console.log(`${nummer05} é o maior`);

//Exercício 11 - respondido com auxílio

const teste1 = 9
    teste2 = 6
    teste3 = 1;

if (teste1 % 2 === 0 || teste2 % 2 === 0 || teste3 % 2 === 0)
    console.log(true);
else
    console.log(false);

//Exercício 12 - concluído

const horarioAtual = 21;
let mensagem = " ";

if (horarioAtual >= 22)
    mensagem = "Não deveríamos comer nada, é hora de dormir";
else if (horarioAtual >= 18 < 22)
    mensagem = "Rango da noite, vamos jantar :D";
else if (horarioAtual >= 14 < 18)
    mensagem = "Vamos fazer um bolo pro café da tarde?";
else if (horarioAtual >= 11 < 14)
    mensagem = "Hora do almoço!!!";
else
    mensagem = "Humm, cheiro de café recém-passado";

console.log(mensagem);

//Exercício 13 - concluído

let porcentagem = 45;

if (porcentagem > 100)
    console.log("Erro");
else if (porcentagem >= 90)
    console.log("Nota A");
else if (porcentagem >= 80)
    console.log("Nota B");
else if (porcentagem >= 70)
    console.log("Nota C");
else if (porcentagem >= 60)
    console.log("Nota D");
else if (porcentagem >= 50)
    console.log("Nota E");
else if (porcentagem < 0)
    console.log("Erro");
else 
    console.log("Nota F");

//Exercício 14 - concluído
const valorCusto = 30
    valorVenda = 90;

let numeroVendas = 1000
    lucro = valorVenda - valorCusto;

if (numeroVendas < 0)
    console.log("Erro");
else
    console.log(numeroVendas * lucro);

//Exercício 15 - concluído
let i = 100
    j = 100
    k = -5;

const triangulo = i + j + k;

if (triangulo < 180) 
    console.log("False");
else if (i && j && k < 0)
    console.log("False");
else
  console.log("True");