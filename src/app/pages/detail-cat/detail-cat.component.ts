import { Component, OnInit, inject, input } from '@angular/core';
import { CatImageResponse } from '@core/models';
import { CatApiService } from '@core/services';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-detail-cat',
  standalone: true,
  imports: [GalleriaModule, CardModule],
  templateUrl: './detail-cat.component.html',
  styleUrl: './detail-cat.component.scss'
})
export default class DetailCatComponent implements OnInit {
  ngOnInit(): void {
    this.catService.getCatImage(this.id()).subscribe(res => {
      this.dataCat = res
    })
  }
  private catService = inject(CatApiService);

  id = input.required<string>();
  dataCat!: CatImageResponse[];


  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ]

}
