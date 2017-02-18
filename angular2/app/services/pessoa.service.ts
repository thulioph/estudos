import { Injectable } from 'angular2/core'
import { Http, Headers, RequestOptions } from 'angular2/http'

@Injectable()

// Service Pessoa

export class PessoaService {
  private apiUrl = 'https://api.github.com/';

  // Método construtor
  // @param http: Http
  constructor(private http: Http) {}

  getPessoas() {
    return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => {
              console.log(response.json())
              response.json()
            })
            .catch(err => console.warn(err))
  }

  novaPessoa() {}

  editarPessoa() {}

  excluirPessoa() {}
}