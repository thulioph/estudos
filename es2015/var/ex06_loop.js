// Foi criado um array vazio e um laço que vai adicionar uma função
// ao array e essa função realiza apenas um console.log();
//
// Como a variável `i` não tem escopo de bloco,
// ela sofre o hoisting e ficará disponível de forma global.
// a condição que faz o loop parar é `i < 10`
// quando isso acontecer, o seu último valor será 10.
//
// Então ao executar a função passando uma posição do índice
// o valor de `i` sempre será o mesmo.

var funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  })
}

funcs[2]();
funcs[8]();