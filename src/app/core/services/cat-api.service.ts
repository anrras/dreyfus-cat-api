import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { retry, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  // TODO: pasar a una variable de entorno
  private readonly BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
  private http = inject(HttpClient);

  getBreeds() {
    return this.http.get(this.BREEDS_URL).pipe(retry(3), share());
  }

}
