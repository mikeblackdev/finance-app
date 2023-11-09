import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transactions } from '../interfaces/transactions.interface';
import { Transaction } from '../interfaces/transaction.interface';

/**
 * Dummy service for mimicking an api for transactions
 * Would be replaced by a service with real api calls
 */
@Injectable()
export class DummyTransactionService {
  private _transactions!: Transactions[];

  /**
   * Initializes transactions
   */
  constructor() {
    const netflix: Transaction = {
      name: 'Netflix',
      date: 'Jul 3, 2022 13:23',
      amount: '$9.99',
      icon: '../../../assets/netflix.jpg',
      isNegative: true,
    };
    const starbucks: Transaction = {
      name: 'Starbucks',
      date: 'Jul 3, 2022 9:13',
      amount: '$5.42',
      icon: '../../../assets/starbucks.jpg',
      isNegative: true,
    };
    const audrey: Transaction = {
      name: 'Audrey Horne',
      date: 'Jul 2, 2022 11:59',
      amount: '$300',
      icon: '../../../assets/audrey.jpg',
      isNegative: false,
    };
    const coop: Transaction = {
      name: 'Agent Cooper',
      date: 'Jul 2, 2022 11:58',
      amount: '$7.77',
      icon: '../../../assets/cooper.jpg',
      isNegative: true,
    };
    const yesterday: Transactions = {
      date: 'Yesterday',
      transactions: [netflix, starbucks],
    };
    const july2: Transactions = {
      date: 'July 2',
      transactions: [audrey, coop],
    };
    this._transactions = [yesterday, july2];
  }

  /**
   * Mimics an http get request for transactions
   * @returns an observable of transactions
   */
  public getTransactions(): Observable<Transactions[]> {
    return of(this._transactions);
  }
}
