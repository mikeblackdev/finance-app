import { Component, OnInit } from '@angular/core';
import { DummyCardService } from 'src/app/services/dummy-card.service';
import { Card } from 'src/app/interfaces/card.interface';

/**
 * Class for orchestrating a list of cards
 */
@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  public cards?: Card[];

  /**
   * Inject CardService
   * @param _cardsSvc a service for getting card objects
   */
  constructor(private _cardsSvc: DummyCardService) {}

  /**
   * Subscribe to cards
   */
  ngOnInit() {
    this._cardsSvc.getCards().subscribe((cards: Card[]) => {
      this.cards = cards;
    });
  }
}
