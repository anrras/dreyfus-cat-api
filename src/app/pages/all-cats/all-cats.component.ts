import { JsonPipe } from '@angular/common';
import { Component, OnInit, computed, inject, model } from '@angular/core';
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
export default class AllCatsComponent {
  private catService = inject(CatApiService)
  catBreeds = this.catService.catBreeds
  filter = model<string>('Bengal')

  filteredBreeds = computed(() =>
    this.catBreeds()?.filter(s => s.name.includes(this.filter())));

  getMoreBreeds() {
  }
}
