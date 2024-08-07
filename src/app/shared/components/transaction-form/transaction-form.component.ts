import {Component} from '@angular/core';
import {TransactionService} from "../../../core/services/transaction/transaction.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IncomeType} from "../../../core/enums/income-type";
import {ExpenseType} from "../../../core/enums/expense-type";
import {Currency} from "../../../core/enums/currency";

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss'
})
export class TransactionFormComponent {

  incomeTypes = Object.values(IncomeType);
  expenseTypes = Object.values(ExpenseType)
  currencies = Object.values(Currency);
  isIncome = true;
  isRecurring = false;

  constructor(
    public transactionService: TransactionService,  // Assuming TransactionService is injected here
    public _fb: FormBuilder
  ) {
  }

  transactionForm = this._fb.group({
    type: ['income'],
    amount: [null],
    category: [null],
    recurring: [false],
    currency: [null],
    date: [new Date()]
  })

  onSubmit() {
    if (this.transactionForm.invalid) return console.log('Form is invalid');

    console.log(this.transactionForm.value);
  }

  switchType() {
    this.transactionForm.patchValue({type: this.transactionForm.value.type === 'income' ? 'expense' : 'income'});
    this.isIncome =!this.isIncome;
  }

  setToRecurring() {
    this.transactionForm.patchValue({recurring: !this.transactionForm.value.recurring});
    this.isRecurring = !this.isRecurring;
    if (this.isRecurring) {
      (this.transactionForm as FormGroup).addControl('recurringDate', this._fb.control(null, Validators.required));
    } else {
      (this.transactionForm as FormGroup).removeControl('recurringDate');
    }
  }

}
