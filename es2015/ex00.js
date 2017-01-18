// Exemplo de uma função com parâmetros default
// Se nenhum parâmetro for passado, o valor padrão será `es2015`

function teste(params = 'es2015') {
  return params;
}

console.log(teste());