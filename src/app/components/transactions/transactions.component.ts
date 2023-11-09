import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/interfaces/transactions.interface';
import { DummyTransactionService } from 'src/app/services/dummy-transactions.service';

/**
 * Class for orchestrating a list of transactions
 */
@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  public transactions?: Transactions[];

  /**
   * Inject TransactionService
   * @param _transactionSvc provides [{ date: transactions }] for displaying
   */
  constructor(private _transactionSvc: DummyTransactionService) {}

  /**
   * Subscribe to populate transactions
   */
  ngOnInit() {
    this._transactionSvc
      .getTransactions()
      .subscribe((transactions: Transactions[]) => {
        this.transactions = transactions;
      });
  }
}
