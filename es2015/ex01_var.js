// a variável sera vai receber o hoisting
// como ela não tem escopo de bloco ela vai ser escopo global
// e será impreso o valor `Será?`

{ { { { var sera = 'Será?'; } } } }

console.log(sera);