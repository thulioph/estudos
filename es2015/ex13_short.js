// Exemplo que mostra novidades nas criações de objetos.

// Atualmente se cria assim
// existe trabalho repetitivo,
// nome: nome / idade: idade

var nome = 'Bia';
var nascimento = 1981;

function idade() {
  return new Date().getFullYear() - this.nascimento;
}

var pessoa = {
  nome: nome,
  nascimento: nascimento,
  idade: idade
};

console.log(pessoa);


// Agora basta passar direto o nome da propriedade que será retornada
// seguido de uma vírgula
// e se for função, omite o nome function como no (toString)
// o this que se encontra dentro do `novaPessoa` ele aponta pra sí próprio

var novaPessoa = {
  nome,
  nascimento,
  idade,
  toString() {
    return `${this.nome} = ${this.idade()}`
  }
};

console.log(novaPessoa.toString());

// novaPessoa.nome = 'Alma';
// novaPessoa.nascimento = 2010;
// console.log(novaPessoa.toString());


// Adicionando dinamicamente os atributos do objeto literal
var attrNome = 'nome';
var attrValor = 'Thulio';

var dinamico = {
  [attrNome]: attrValor
};

console.log(dinamico.nome);


// Get e Set nos objetos
// Exemplo que explana melhor a utilização dos métodos (get) e (set);
// torna os dados privados

var sequence = {
  __id: 1,
  get id() { return this.__id++; },
  set id(id) { return this.__id = id; }
};

console.log(sequence.id, sequence.id); // 1 e 2
sequence.id = 100;
console.log(sequence.id, sequence.id); // 100 e 101


// Utilizaçào de prototype
var avo = { attr1: 'A' };
var pai = { __proto__: avo, attr2: 'B' };
var filho = { __proto__: pai, attr3: 'C' };

console.log(filho.attr1, filho.attr2, filho.attr3);

var mae = { corDoCabelo: 'Castanho Escuro' };
var filha = {};

Object.setPrototypeOf(filha, mae);
console.log(filha.corDoCabelo);


// Utilizando o (super)
//

var pai = {
  func() {
    return 'Pai';
  }
};

var filho = {
  func() {
    return `${super.func()} + Filho`;
  }
};

Object.setPrototypeOf(filho, pai);

console.log(filho.func());

