// Exemplo do operador spread e rest
//
// Spread
// são os ... (3 pontos)
// ele pode espalhar ou agrupar um array

function mediaAluno(p1, p2, p3) {
  return ((p1 + p2 + p3) / 3).toFixed(2);
}

var notasAluno = [7.7, 7.3, 6.1, 0];

// apply, pega um array e passa os elementos individuais
console.log(mediaAluno.apply(null, notasAluno)); // contexto, array

// espalha os parâmetros pela função
// como a função só aceita 3 parâmetros,
// o quarto será excluído
console.log(mediaAluno(...notasAluno));

// =====

// concatenando array
// utiliza o spread operator no início do array passando o array
// pega o array e quebra em elementos
// você pode jogar dentro de outro array, passar pra uma função
var notas = [6.8, 7.9, 8.2];
var notasES5 = notas.concat([6.7, 8.9, 9.1]);
var notasES6 = [...notas, 6.7, 8.9, 9.1];

console.log(notasES5);
console.log(notasES6);

// Transformando os parâmetros de uma função num array
// parâmetros rest

function media(...notas) {
  var total = notas.reduce((soma, nota) => soma + nota); // reduce é um método de array
  return total / notas.length;
}

// os valores não fora, passado como array,
// foram passados como argumento de função;
console.log(media(7.3, 7.7, 6.0));