import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { BreedResponse } from '@core/models';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  private router = inject(Router)
  data = input.required<BreedResponse>()

  openDetail(id: string) {
    console.log(id);
    this.router.navigate([`/detail/${id}`]);
  }

}
