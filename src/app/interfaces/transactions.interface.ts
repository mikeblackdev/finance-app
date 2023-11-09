import { Transaction } from './transaction.interface';

export interface Transactions {
  date: string;
  transactions: Transaction[];
}
