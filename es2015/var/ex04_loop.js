// já que a variável `i` não está num escopo de função
// ela será de escopo global, portanto estará disponível fora do laço
// o valor de `i` será o valor que fez com que o laço terminasse

for (var i = 0; i < 10; i++) {}
console.log('Imprimindo o valor de i = ', i);