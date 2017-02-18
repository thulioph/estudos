// Foi criado um array vazio e um laço que vai adicionar uma função
// ao array e essa função realiza apenas um console.log();
//
// Como a variável `i` foi declarada utilizando o let
// agora ela tem escopo de bloco
// e para cada push no array agora `i` terá um valor único
//
// Então ao executar a função passando uma posição do índice
// o valor de `i` será a posição do array.

var funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

funcs[2]();
funcs[8]();