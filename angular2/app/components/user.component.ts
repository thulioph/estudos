import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { UserService } from '../services/user.service';

@Component({
  templateUrl: 'app/views/user.html',
  providers: [
    UserService
  ]
})

export class UserComponent implements OnInit {
  private users: UserComponent[];
  private apiUrl = `https://api.github.com`;
  private userInfo = [];
  private userRepo = [];

  constructor(
    private _user: UserService;
    private _router: Router;
  ) {}

  ngOnInit() {
    let route = this._router.parent.lastNavigationAttempt;
    let api_url = `${this.apiUrl}${route}`;

    this._user.get(api_url)
      .then(_handleInfo.bind(this))
      .then(_handleRepo.bind(this))
      .catch(_handleError);

    function _handleInfo(result) {
      return this.userInfo.push(result);
    }

    function _handleRepo() {
      this._user.get(`${api_url}/repos`).then((result) => this.userRepo = result);
    }

    function _handleError(err) {
      return console.error(err);
    }
  }
}