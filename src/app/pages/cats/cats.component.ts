import { Router, RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.scss'
})
export default class CatsComponent {
  private router = inject(Router);

  goTo(route: string) {
    this.router.navigate([route]);
  }

}
