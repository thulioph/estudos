import { Component } from 'angular2/core';
import { GithubService } from '../services/github.service';

@Component({
  templateUrl: 'app/views/home.html',
  providers: [
    GithubService
  ]
})

export class HomeComponent {
  private submitted: boolean = false;
  private repos: Array[];
  private form = {}
  private isRepo = false;
  private error = {};

  constructor(private _service: GithubService) {}

  onSubmit() {
    this._service.search(this.form)
      .then((result) => {
        if (result.total_count > 0) {
          this.error = {};
          this.repos = result.items
        } else {
          this.repos = [];
          this.error = {
            status: true,
            message: 'Não existe nada com o filtro passado.'
          }
        }
      });
  }

  onChange(value) {
    this.repos = [];
    this.error = {};

    this.isRepo = false;

    if (value !== 'users') {
      this.isRepo = true;
    }
  }
}