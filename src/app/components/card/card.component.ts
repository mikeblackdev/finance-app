import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';

/**
 * Child of CardsComponent used to display individual card info
 */
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  card?: Card;
}
