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
import { PessoaComponent } from './pessoa.component';
import { ProdutoComponent } from './produto.component';

// Services
import { PessoaService } from '../services/pessoa.service';

// Routes
import { AppRoutes } from '../routes'

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/index.html',
  directives: [ ROUTER_DIRECTIVES ],
  providers: [
    ROUTER_PROVIDERS,
    PessoaService,
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
    path: '/pessoas',
    name:'Pessoas',
    component: PessoaComponent
  },
  {
    path: '/produtos',
    name:'Produtos',
    component: ProdutoComponent
  }
])

export class AppComponent {

  // Atributos
  private id:number;
  private nome, email: string;
  private pessoas: Array[];
  private pessoa: AppComponent = {};


  // Método construtor
  // @param _service: PessoaService
  constructor(private _service: PessoaService) {
    // this.getPessoas();
  }

  // Listando pessoas
  getPessoas() {
    console.info('Obtendo...');

    this._service.getPessoas().then(pessoas => { this.pessoas = pessoas });
  }

  // Salvar pessoas
  salvarPessoa() {
    console.info('Salvando...');

    if(this.pessoa.id) {
      this._service.editarPessoa(this.pessoa).then(res => {
        this.getPessoas()
      })
    } else {
      this._service.novaPessoa(this.pessoa).then(res => {
        this.getPessoas()
      })
    }
  }

  // Editar pessoa
  // @param item: Array
  editarPessoa(item) {
    console.info('Editando...');

    this.pessoa = item;
  }

  // Excluir pessoa
  excluirPessoa(item) {
    console.info('Excluindo...');

    this._service.excluirPessoa(item.id).then(res => {
      this.getPessoas()
    })
  }

  // Cancelar cadastro
  cancelar() {
    console.info('Cancelando...');

    this.pessoa = {};
  }
}