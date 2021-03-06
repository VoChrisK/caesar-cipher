import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CipherService {
  url = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  fetchQueries() {
    return this.http.get<any>(`${this.url}cipher`);
  }

  encryptString(input) {
    return this.http.post(`${this.url}cipher/add`, input);
  }
}
