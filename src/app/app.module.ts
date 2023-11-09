import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// components
import { ScreenComponent } from './components/screen/screen.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { FinanceAppComponent } from './components/finance-app/finance-app.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { UtilityBarComponent } from './components/utility-bar/utility-bar.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';

// services
import { DummyTransactionService } from './services/dummy-transactions.service';
import { DummyCardService } from './services/dummy-card.service';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    StatusBarComponent,
    FinanceAppComponent,
    CardsComponent,
    CardComponent,
    UtilityBarComponent,
    TransactionsComponent,
    TransactionComponent,
    AppBarComponent,
  ],
  imports: [BrowserModule],
  providers: [DummyTransactionService, DummyCardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
