import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Breed } from '@core/models';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  private router = inject(Router)
  data = input.required<Breed>()

  openDetail(id: string) {
    console.log(id);
    this.router.navigate([`/detail/${id}`]);
  }

}
