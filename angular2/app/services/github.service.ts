import { Injectable } from 'angular2/core'
import { Http, Headers, RequestOptions } from 'angular2/http'

@Injectable()

// Service Github

export class GithubService {
  private apiUrl = `https://api.github.com`;

  constructor(private http: Http) {}

  search(obj) {
    let { type, search } = obj;
    let searchUrl = `${this.apiUrl}/search/${type}?q=${search}`;

    return this.http.get(searchUrl).toPromise().then(response => response.json()).catch(err => err);
  }

}