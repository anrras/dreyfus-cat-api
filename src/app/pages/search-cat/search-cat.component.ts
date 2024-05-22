import { toSignal } from '@angular/core/rxjs-interop';
import { Component, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatApiService } from '@core/services';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { BreedResponse } from '@core/models';

@Component({
  selector: 'app-search-cat',
  standalone: true,
  imports: [FormsModule, DropdownModule, CardModule],
  templateUrl: './search-cat.component.html',
  styleUrl: './search-cat.component.scss'
})
export default class SearchCatComponent {

  private catService = inject(CatApiService)
  selectedCat = model('');
  dataCat!: BreedResponse
  catBreeds = toSignal(this.catService.getAllCats())
  selectCat(event: any) {
    this.dataCat = event
  }
}
