// Exemplos anterior só que refatorado utilizando arrow function
// arrow functions encoraja o uso e princípio
// da programação funcional
// funções pequenas com alto grau de reuso

var estoque = [
  { nome: 'Papel A4', preco: 19.90, qtde: 300, fragil: false },
  { nome: 'Monitor', preco: 1699, qtde: 15, fragil: true },
  { nome: 'Ovos', preco: 18.99, qtde: 21, fragil: true },
  { nome: 'Pneu', preco: 1027.34, qtde: 16, fragil: false },
  { nome: 'iPad', preco: 3999, qtde: 17, fragil: true }
];


// remove todas as funções anônimas
// removendo a palavra reservada (function);
// remove as chaves e o return e adiciona a arrow (=>)
// se a função só tiver um único parâmetro, você pode tirar os parêntesis da função;
// no exemplo do reduce, existem 2 parâmetros, então não se pode remover os parêntesis;
// se a função não tiver nenhum parâmetro os parêntesis ficam vazios ();
//
// você pode criar funções reusáveis com o restante da função que sobrou;


const isCaro = item => item.preco >= 1000;
const caros = estoque.filter(isCaro);
// console.log(caros); // só os produtos acima de 1000;


const isFragil = item => item.fragil;
const fragil = caros.filter(isFragil);
// console.log(fragil); // só os produtos frágeis


const qtde = fragil.map(item => item.qtde);
// console.log(qtde); // vai me retornar um array com as quantidades de cada item

const total = qtde.reduce((total, quantidade) => total + quantidade);
// console.log(total); // irá somar os produtos;