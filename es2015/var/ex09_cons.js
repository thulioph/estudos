// Exemplo que mostra que o const possui escopo de bloco
// assim como o let

var a = 1;

{
  const a = 2;
  console.log('Dentro do bloco = ', a);
}

console.log('Fora do bloco = ', a);