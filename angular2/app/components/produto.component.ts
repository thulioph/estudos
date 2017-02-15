//
// Arquivo que contém o componente <my-app>
// com um template básico
//

import { Component } from 'angular2/core';

@Component({
  templateUrl: 'app/views/produto.html'
})

export class ProdutoComponent {
  private produtos: ProdutoComponent[];
  constructor() {
    this.produtos = [
      { id: 1, name: 'Produto 1', price: 'R$ 10,00' },
      { id: 2, name: 'Produto 2', price: 'R$ 20,00' }
    ]
  }
}