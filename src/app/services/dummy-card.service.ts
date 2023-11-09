import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../interfaces/card.interface';

/**
 * Dummy service for mimicking an api for cards
 * Would be replaced by a service with real api calls
 */
@Injectable()
export class DummyCardService {
  private _cards!: Card[];

  /**
   * Initializes cards
   */
  constructor() {
    const masterCard: Card = {
      amount: '$542.25',
      id: '4587',
      logo: '../../../assets/mastercard.png',
      color: '#5d606d',
    };
    const ukranianCard: Card = {
      amount: '₴100.75',
      id: '6471',
      logo: '../../../assets/ukranianbank.png',
      color: '#557a94',
    };
    this._cards = [masterCard, ukranianCard];
  }

  /**
   * Mimics an http get request for cards
   * @returns an observable of cards
   */
  public getCards(): Observable<Card[]> {
    return of(this._cards);
  }
}
