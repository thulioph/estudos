// existem duas variáveis
// a declarada com var possui um escopo global
// a declarada com let possui um escopo de bloco
// perceba que o nome da variável é o mesmo, porém a forma como foi declarada cada uma utilizando var e let é o que faz modificar o seu valor dependendo de onde for "consultada"

var numero = 1;

{
  let numero = 2;
  console.log('Dentro = ', numero);
}

{
  let numero = 0;
  console.log('Dentro 2 = ', numero);
}

console.log('Fora = ', numero);