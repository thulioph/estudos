// Vamos operar em cima de um estoque
// que contém uma série de produtos
// eu quero os produtos mais caros e frágeis
// e depois a soma do meu estoque

var estoque = [
  { nome: 'Papel A4', preco: 19.90, qtde: 300, fragil: false },
  { nome: 'Monitor', preco: 1699, qtde: 15, fragil: true },
  { nome: 'Ovos', preco: 18.99, qtde: 21, fragil: true },
  { nome: 'Pneu', preco: 1027.34, qtde: 16, fragil: false },
  { nome: 'iPad', preco: 3999, qtde: 17, fragil: true }
];

// o .filter vai me retornar um array
// de acordo com a condição do filtro
// item.preco maior ou igual a 1000;
const caros = estoque.filter(function(item) {
  return item.preco >= 1000;
});

// console.log(caros); // só os produtos acima de 1000;

// o .filter novamente vai me retornar um array
// porém agora só os objetos em que o produto seja frágil
const fragil = caros.filter(function(item) {
  return item.fragil
});

// console.log(fragil); // só os produtos frágeis

// o .map transforma os elementos de um array
// cada item que eu recebo eu quero apenas a quantidade dele
// transformando um array de objetos em um array de inteiros
const qtde = fragil.map(function(item) {
  return item.qtde;
});

// console.log(qtde); // vai me retornar um array com as quantidades de cada item

// o .reduce reduz um array de elementos até um único valor
// o primeiro parâmetro é um acumulador
// sempre vai ser passado pra cada chamada
// o segundo parâmetro é cada ítem do array
const total = qtde.reduce(function(total, quantidade) {
  return total + quantidade;
});

// console.log(total); // irá somar os produtos;

