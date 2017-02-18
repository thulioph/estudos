//
// Arquivo de inicialização do projeto angular
//
// Initia o angular2 chamando o bootstrap e
// seta o AppComponent como o componente pai da aplicação

import { bootstrap } from 'angular2/platform/browser';
import 'rxjs/Rx';
import { HTTP_PROVIDERS } from 'angular2/http';

import { AppComponent } from './components/app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS]);