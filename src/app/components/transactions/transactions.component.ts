import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/interfaces/transactions.interface';
import { DummyTransactionService } from 'src/app/services/dummy-transactions.service';

@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  public transactions?: Transactions[];

  constructor(private _transactionSvc: DummyTransactionService) {}

  ngOnInit() {
    this._transactionSvc
      .getTransactions()
      .subscribe((transactions: Transactions[]) => {
        this.transactions = transactions;
        console.log('transactions', transactions);
      });
  }
}
