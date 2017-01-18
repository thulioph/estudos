// Você não pode mudar o valor de uma constante
// mas você pode alterar as suas propriedades
//
// No exemplo abaixo, o objeto pessoa é uma constante
// eu posso alterar suas propriedades
// mas não posso alterar a sua referência;

const pessoa = {
  nome: 'Manochao'
};

console.log(pessoa.nome);

pessoa.nome = 'Thulio';

console.log(pessoa.nome);

pessoa = [];

console.log(pessoa);