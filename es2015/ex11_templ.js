// Template strings são utilizados para concatenar strings
// pode-se utilizar: indentação, tabs, espaços, expressões, funções, etc..
// para utiliza-lo basta usar ``
// e para substituir as variáveis você utiliza ${variavel}

// modo antigo
var nome = 'Thulio';
var string = 'Olá ' + nome + '!';
console.log(string);

// modo novo
var templateStrig = `
  Olá
  ${nome} !`;

console.log(templateStrig);

// utilizando expressões
var soma = `1 + 1 = ${ 1 + 1 }`;
console.log(soma);

// utilizando funções
function toUpper(string) {
  return string.toUpperCase();
}

var expressao = `Ei.. ${toUpper('cuidado')}!`;
console.log(expressao);