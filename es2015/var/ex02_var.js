// o var (dentro do bloco) não tem escopo de bloco,
// ele recebe o hoisting então será uma variável global
// o seu valor (fora do bloco) será sobescrito pelo valor que está dentro do bloco, que após receber o hoisting ficou global.


var numero = 1;

{
  var numero = 2;
  console.log('Dentro = ', numero);
}

console.log('Fora = ', numero);