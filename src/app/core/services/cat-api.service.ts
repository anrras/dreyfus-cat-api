import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Injectable, inject } from '@angular/core';
import { Observable, map, retry, share } from 'rxjs';
import { Breed, CatImageResponse } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  // TODO: pasar a una variable de entorno
  private readonly BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
  private http = inject(HttpClient);
  private catBreeds$ = this.http.get<Breed[]>(this.BREEDS_URL).pipe(retry(3), share());
  catBreeds = toSignal<Breed[]>(this.catBreeds$);


  getCatImage(breedId: string): Observable<CatImageResponse[]> {
    return this.http.get<CatImageResponse[]>(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=8`).pipe(retry(3), share());
  }

}
