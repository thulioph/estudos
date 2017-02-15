//
// Arquivo que contém o componente <my-app>
// com um template básico
//

import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/myapp.html'
})

export class AppComponent {
  title:string = 'Aqui vem alguma coisa!';
  name:string = 'Notorious';
}