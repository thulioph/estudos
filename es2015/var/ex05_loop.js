// a variável `i` agora foi definida utilizando o let
// o let possui escopo de bloco, portanto o valor de `i`
// não será acessível fora do bloco do laço
// isso irá ocasionar um erro

for (let i = 0; i < 10; i++) {}
console.log('Imprimindo o valor de i = ', i);