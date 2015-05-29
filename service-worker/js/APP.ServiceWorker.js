// Dispara durante a instalação, baixando os recursos.
this.oninstall = function(event) {
  console.log('Instalou!');
};

// Terminou de baixar e vai ficar valendo.
this.onactive = function(event) {
  console.log('Ativou!');
};

// Dispara todas as requisições da minha página (intercepta a url).
this.onfetch = function(event) {
  console.log(event.request.url);
}