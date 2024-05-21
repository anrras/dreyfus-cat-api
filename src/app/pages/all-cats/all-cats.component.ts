import { JsonPipe } from '@angular/common';
import { Component, OnInit, computed, inject, model, signal } from '@angular/core';
import { BreedResponse } from '@core/models';
import { CatApiService } from '@core/services';
import { CardComponent } from '@shared/components';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-all-cats',
  standalone: true,
  imports: [JsonPipe, ButtonModule, CardComponent],
  templateUrl: './all-cats.component.html',
  styleUrl: './all-cats.component.scss'
})
export default class AllCatsComponent implements OnInit {

  private catService = inject(CatApiService)
  catBreeds = signal<BreedResponse[]>([])

  page = 0

  ngOnInit(): void {
    this.getMoreBreeds()
  }

  getMoreBreeds() {
    this.catService.getMoreBreeds(this.page, 10).subscribe(res => {
      console.log(res)
      this.catBreeds.update(breeds => [...breeds, ...res]);
      this.page++
    })
  }
}
