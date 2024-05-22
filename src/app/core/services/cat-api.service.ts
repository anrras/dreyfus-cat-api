import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Injectable, inject } from '@angular/core';
import { Observable, map, retry, share } from 'rxjs';
import { BreedResponse, CatImageResponse } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  // TODO: pasar a una variable de entorno
  private readonly BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
  private http = inject(HttpClient);

  getCatImage(breedId: string): Observable<CatImageResponse[]> {
    return this.http.get<CatImageResponse[]>(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=8`).pipe(retry(3), share());
  }

  getMoreBreeds(page: number, limit: number) {
    return this.http.get<BreedResponse[]>(`${this.BREEDS_URL}?limit=${limit}&page=${page}`).pipe(retry(3), share());
  }

  getAllCats() {
    return this.http.get<BreedResponse[]>(`${this.BREEDS_URL}`).pipe(retry(3), share())
  }

}
