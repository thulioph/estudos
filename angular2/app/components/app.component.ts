//
// Arquivo que contém o componente <my-app>
// com um template básico
//

// Angular Core
import { Component, Input } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

// Components
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';
import { ProdutoComponent } from './produto.component';

// Services
import { UserService } from '../services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/index.html',
  directives: [ ROUTER_DIRECTIVES ],
  providers: [
    ROUTER_PROVIDERS,
    UserService,
    HTTP_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/',
    name:'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/users/:username',
    name:'User',
    component: UserComponent
  },
  {
    path: '/produtos',
    name:'Produtos',
    component: ProdutoComponent
  }
])

export class AppComponent {

  private id:number;
  private nome, email: string;

  constructor(private _service: UserService) {}
}