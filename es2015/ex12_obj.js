// O operador destructuring permite você criar variáveis
// dos atributos internos de um objeto ou array.
//
// Para objeto a notação é a mesma da criação de um objeto literal {};
// Para array a notação é a mesma da criação de um array literal [];
//
// As chaves do lado esquerdo, contém o que será extraído do objeto selecionado;

var pessoa = {
  nome: 'Ana',
  idade: 20
};

// utilizando os atributos como variáveis
var { nome, idade } = pessoa;
console.log(nome, idade);

// criando diferentes variáveis dos atributos
var { nome: n, idade: i } = pessoa;
console.log(n, i);

// `genero` não existe no objeto pessoa, o seu valor irá retornar `undefined`
//
// se `situação` não existir no objeto pessoa ele retorna o valor 'Ativa' como padrão, caso contrário retorna o seu valor;
// pessoa.situacao = 'Fudeu'; // agora a situação existe
var { genero, situacao = 'Ativa' } = pessoa;
console.log(genero, situacao);

// destructuring de objeto dentro de outro objeto
// pessoa já é um objeto, foi criado um novo atributo chamado de endereço
// que também é um objeto
//
pessoa.endereco = {
  rua: 'A',
  numero: 1000
};

var { endereco : { rua, numero: n, cep } } = pessoa;
console.log(rua, n, cep);

// vai exibir um erro
// porque está sendo extraído um atributo que não existe dento do objeto
// var { conta : { agencia, conta } } = pessoa;
// console.log(agencia, conta);


// destructuring de um array
var [a] = [10];
console.log(a);

var [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

// destructuring num elemento array de array
var [, [, nota]] = [[7, 8, 8], [9, 6, 8]];
console.log(nota);


// destructuring como parâmetro de função
function rand({ min = 0, max = 1000 }) {
  var value = Math.random() * (max - min);
  var numero = Math.floor(value) + min;

  return console.log(`O número é: ${numero}`);
}

rand({ min: 10, max: 50 }); // assume os valores passados aqui
rand({min: 899}); // min agora é 899 e max é o da declaraçào
rand({}); // assume os valores min e max que já estão na declaração
rand(); // retorna um erro porque nenhum objeto foi passado