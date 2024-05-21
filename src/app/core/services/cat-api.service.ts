import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Injectable, inject } from '@angular/core';
import { Observable, map, retry, share } from 'rxjs';
import { BreedResponse } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  // TODO: pasar a una variable de entorno
  private readonly BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
  private http = inject(HttpClient);
  private catBreeds$ = this.http.get<BreedResponse[]>(`${this.BREEDS_URL}?limit=10&page=0`).pipe(retry(3), share());
  catBreeds = toSignal<BreedResponse[]>(this.catBreeds$);


  getCatImage(breedId: string): Observable<BreedResponse[]> {
    return this.http.get<BreedResponse[]>(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=8`).pipe(retry(3), share());
  }

  getMoreBreeds(page: number, limit: number) {
    return this.http.get<BreedResponse[]>(`${this.BREEDS_URL}?limit=${limit}&page=${page}`).pipe(retry(3), share());
  }

}
