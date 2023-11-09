import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  card?: Card;
}
