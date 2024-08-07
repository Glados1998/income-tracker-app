import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../../core/services/transaction/transaction.service";
import {ITransaction} from "../../../core/interfaces/transaction";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent implements OnInit {

  transactionsList: ITransaction[];

  constructor(
    private transactionService: TransactionService
  ) {
  }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe({
      next: (transactions) => {
        this.transactionsList = transactions
        console.log(this.transactionsList);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
