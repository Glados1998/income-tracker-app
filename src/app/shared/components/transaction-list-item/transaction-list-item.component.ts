import {Component, Input} from '@angular/core';
import {ITransaction} from "../../../core/interfaces/transaction";
import {TransactionService} from "../../../core/services/transaction/transaction.service";
import {FormBuilder, Validators} from "@angular/forms";
import {IncomeType} from "../../../core/enums/income-type";
import {ExpenseType} from "../../../core/enums/expense-type";
import {Currency} from "../../../core/enums/currency";

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrl: './transaction-list-item.component.scss'
})
export class TransactionListItemComponent {

  @Input() transaction: ITransaction;
  editMode = false;
  incomeTypes = Object.values(IncomeType);
  expenseTypes = Object.values(ExpenseType);
  currencies = Object.values(Currency);

  constructor(
    private transactionService: TransactionService,
    private fb: FormBuilder
  ) {
  }

  transactionForm = this.fb.group({
    type: [null],
    amount: [null, [Validators.required, Validators.min(0.01)]],
    category: [null, Validators.required],
    recurring: [false],
    currency: [null, Validators.required],
    date: [null],
  })

  deleteTransaction(id: number) {
    console.log(`Deleting transaction with id: ${id}`);
  }

  editTransaction() {
    this.editMode = true;
    this.transactionForm.patchValue(this.transaction as any);
  }

  saveEditTransaction() {
    console.log(this.transactionForm.value);
  }

  cancelEditTransaction() {
    this.editMode = false;
  }

}
