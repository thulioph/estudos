import { Injectable } from 'angular2/core'
import { Http, Headers, RequestOptions } from 'angular2/http'

@Injectable()

// Service User

export class UserService {
  constructor(private http: Http) {}

  get(apiUrl) {
    let api_url = '';

    api_url = apiUrl.toString();

    return this.http.get(api_url).toPromise()
            .then(response => response.json())
            .catch(err => console.warn(err));
  }
}