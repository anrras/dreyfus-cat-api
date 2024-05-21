import { Component, input } from '@angular/core';

@Component({
  selector: 'app-detail-cat',
  standalone: true,
  imports: [],
  templateUrl: './detail-cat.component.html',
  styleUrl: './detail-cat.component.scss'
})
export default class DetailCatComponent {

  id = input.required<string>();

}
