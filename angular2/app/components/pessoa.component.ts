//
// Arquivo que contém o componente <my-app>
// com um template básico
//

import { Component } from 'angular2/core';

@Component({
  templateUrl: 'app/views/pessoa.html'
})

export class PessoaComponent {
  private pessoas: PessoaComponent[];

  constructor() {
    this.pessoas = [
      { id: 1, name: 'Luciana', email: 'luciana@gmail.com' },
      { id: 2, name: 'George', email: 'george@gmail.com' }
    ]
  }
}