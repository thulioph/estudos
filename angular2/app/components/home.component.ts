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

  constructor(private _service: GithubService) {}

  onSubmit() {
    console.warn(this.form);

    this._service.search(this.form).then((result) => this.repos = result.items);
    this.form = {};
  }

  onChange(value) {
    this.isRepo = false;

    if (value !== 'users') {
      this.isRepo = true;
    }
  }
}