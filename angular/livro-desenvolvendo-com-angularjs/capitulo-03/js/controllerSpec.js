describe('Controller: ListCtrl', function() {
  
  // Instancia uma nova versão de meu módulo antes de cada teste.
  beforeEach(module('notesAPP'));

  var ctrl;

  // Antes de cada teste, cria uma nova instância do controlador.
  beforeEach(inject(function($controller) {
    ctrl = $controller('ListCtrl');
  }));

  it('should have items available on load', function() {
    expect(ctrl.items).toEqual([
      {id: 1, label: 'First', done: true},
      {id: 2, label: 'Second', done: false}
    ]);
  });

  it('should have highlight base on state', function() {
    var item = {id: 1, label: 'First', done: true};
    var actualClass = ctrl.getDoneClass(item);

    expect(actualClass.finished).toBeTruthy();
    expect(actualClass.unfinished).toBeFalsy();

    item.done = false;
    actualClass.getDoneClass(item);
    expect(actualClass.finished).toBeFalsy();
    expect(actualClass.unfinished).toBeTruthy();
  });

});


// 1. Instanciando os módulos:

// No exemplo acima foi escrito dois testes de unidade específicos para o controlador `ListCtrl`.

// Criamos uma nova estância do módulo AngularJS `notesApp`. Isto faz com que seja carregado novamente todos os controladores, serviços, diretivas e filtros associados a este modulo antes de cada teste específico.


// 2. Injetando serviços:

// A variável `ctrl` irá armazenar uma instância do controlador em cada teste de unidade.

// O bloco beforeEach após a variável utiliza o `inject` que injeta serviços do angular nas funções beforeEach e it.


// 3. Criando a instância do controlador:

// Foi usado o serviço $controller para criar uma instância do `ListCtrl`. Isto é feito passando o nome do controlador como string ao $controller e se obtem uma nova instância do controlador como resultado, que é atribuído a variável ctrl para ser usada em cada teste individual.
