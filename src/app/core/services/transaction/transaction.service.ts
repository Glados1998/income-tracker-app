import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITransaction} from "../../interfaces/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

  addTransaction(transaction: ITransaction): void {
      console.log(transaction);
  }

  getTransactions(): Observable<any> {
    return this.http.get('/api/transactions');
  }

  getTransaction(id: number): Observable<any> {
    return this.http.get(`/api/transactions/${id}`);
  }

  updateTransaction(transaction: ITransaction): Observable<any> {
    return this.http.put(`/api/transactions/${transaction.id}`, transaction);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`/api/transactions/${id}`);
  }

}
