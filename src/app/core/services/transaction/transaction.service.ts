import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITransaction} from "../../interfaces/transaction";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  addTransaction(transaction: ITransaction): Observable<any> {
      return this.http.post(`${this.apiUrl}/transaction`, transaction);
  }

  getTransactions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/transaction`);
  }

  getTransaction(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/transaction/${id}`);
  }

  updateTransaction(transaction: ITransaction): Observable<any> {
    return this.http.put(`${this.apiUrl}/transaction/${transaction.id}`, transaction);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/transaction/${id}`);
  }

}
