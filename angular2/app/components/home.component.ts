import { Component } from 'angular2/core';
import { GithubService } from '../services/github.service';

@Component({
  templateUrl: 'app/views/home.html',
  providers: [
    GithubService
  ]
})

export class HomeComponent {
  // Atributos
  private submitted: boolean = false;
  private form = {}
  private repos: Array[];

  constructor(private _service: GithubService) {}

  onSubmit() {
    this._service.search(this.form).then((result) => this.repos = result.items);

    this.form = {};
  }
}