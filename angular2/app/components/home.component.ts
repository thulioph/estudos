import { Component } from 'angular2/core';
import { Router, Params } from 'angular2/router';

import { GithubService } from '../services/github.service';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: 'app/views/home.html',
  providers: [
    GithubService,
    UserService
  ]
})

export class HomeComponent {
  private submitted: boolean = false;
  private repos: Array[];
  private form = {}
  private isRepo = false;
  private error = {};

  constructor(
    private _github: GithubService;
    private _user: UserService;
    private _router: Router;
  ) {}

  onSubmit() {
    this._github.search(this.form)
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

  onChange(value: String) {
    this.repos = [];
    this.error = {};

    this.isRepo = false;

    if (value !== 'users') {
      this.isRepo = true;
    }
  }

  viewMore(data: Object, isRepo: boolean) {
    if (isRepo) {
      let url = '/repositories';
    } else {
      let url = `/users/${data.login}`;
    }

    this._router.navigateByUrl(url);
  }
}