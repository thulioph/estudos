//
// Arquivo que contém o componente <my-app>
// com um template básico
//

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { PessoaComponent } from './pessoa.component';
import { ProdutoComponent } from './produto.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/index.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/pessoas',
    name:'Pessoas',
    component: PessoaComponent,
    useAsDefault: true
  },
  {
    path: '/produtos',
    name:'Produtos',
    component: ProdutoComponent
  }
])

export class AppComponent {}