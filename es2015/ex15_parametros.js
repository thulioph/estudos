// Exemplo de parâmetro padrão
//
// como era feito

function soma(a, b) {
  a = a != undefined ? a : 1;
  b = b != undefined ? b : 1;

  return a + b;
}

// console.log(soma(), soma(2, 3), soma(0)); //2, 5, 1

// verifica se (a) é diferente de undefined (if ternário)
// se for ele atribui o valor, caso contrário coloca a = 1;


// Parâmetro com valor padrão
// inteiro
function soma(a = 1, b = 1) {
  return a + b;
}

// console.log(soma(), soma(2, 3), soma(0)); //2, 5, 1


// Parâmetro com valor padrão
// o valor padrão pode ser função ou uma expressão
function valorPadrao() {
  return 2;
}

function soma(a = valorPadrao() + 1, b = valorPadrao()) {
  return a + b;
}

console.log(soma(), soma(2, 3), soma(0)); //5, 5, 2