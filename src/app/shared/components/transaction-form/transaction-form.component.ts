import { Component, OnInit } from '@angular/core';
import { TransactionService } from "../../../core/services/transaction/transaction.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IncomeType } from "../../../core/enums/income-type";
import { ExpenseType } from "../../../core/enums/expense-type";
import { Currency } from "../../../core/enums/currency";

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  incomeTypes = Object.values(IncomeType);
  expenseTypes = Object.values(ExpenseType);
  currencies = Object.values(Currency);
  isIncome = true;
  isRecurring = false;
  transactionForm: FormGroup;

  constructor(
    private transactionService: TransactionService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.transactionForm = this._fb.group({
      type: ['income'],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      category: [null, Validators.required],
      recurring: [false],
      currency: [null, Validators.required],
      date: [null],
    });
  }

  onSubmit(): void {
    if (this.transactionForm.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.transactionForm.patchValue({ date: new Date(this.transactionForm.value.date) });

    this.transactionService.addTransaction(this.transactionForm.value);
    this.transactionForm.reset();
  }

  switchType(): void {
    const newType = this.transactionForm.value.type === 'income' ? 'expense' : 'income';
    this.transactionForm.patchValue({ type: newType });
    this.isIncome = !this.isIncome;
  }

  setToRecurring(): void {
    this.isRecurring = !this.isRecurring;
    this.transactionForm.patchValue({ recurring: this.isRecurring });

    if (this.isRecurring) {
      this.transactionForm.addControl('recurringDate', this._fb.control(null, Validators.required));
    } else {
      this.transactionForm.removeControl('recurringDate');
    }
  }
}
