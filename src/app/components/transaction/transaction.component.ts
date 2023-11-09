import { Component, Input } from "@angular/core";
import { Transaction } from "src/app/interfaces/transaction.interface";

@Component({
    selector: 'transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
    @Input()
    transaction?: Transaction;
}