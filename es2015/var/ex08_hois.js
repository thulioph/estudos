// Exemplo de hoisting para o let, var e const;
//
// Como a variável definida com o `var` sofre o hoisting
// no momento que seu valor for acessado ele será `undefined`
// é como se fosse:
// primeiro var a;
// depois console de a (nesse momento é undefined)
// depois atribui um valor de 1 para a variável a;
// não será mostrado nenhum erro para `a` pois seu valor será undefined;
//
// O `let` não sofre hoisting (a variável não será elevada)
// então no momento que a variável b foi acessada ela não estava definida
// isso irá gerar um erro;
//
// O `const` também não sofre hoisting
// se tentar acessa-lo antes de defini-lo, será dado o mesmo erro do let.

console.log('a = ', a);
var a = 1;

console.log('b = ', b);
let b = 2;

console.log('c = ', c);
const c = 3;