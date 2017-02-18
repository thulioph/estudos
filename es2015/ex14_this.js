// Exemplo que mostra os diferentes contextos do (this)

function func() {
  console.log(this === global, this === obj);
}

var obj = { func };

func();
obj.func();

// Cada um vai imprimir de uma maneira diferente,
// atenção na sua utilização;