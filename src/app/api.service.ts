import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUrlByCategory(categoryUrl: string): Observable<any> {
    const apiUrl = ` https://swapi.dev/api/${categoryUrl}`;

    console.log(this.http.get(apiUrl));
    return this.http.get(apiUrl);
  }
}
