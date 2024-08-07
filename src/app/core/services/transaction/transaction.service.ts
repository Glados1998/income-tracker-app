import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITransaction} from "../../interfaces/transaction";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:3000';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  addTransaction(transaction: ITransaction): Observable<any> {
      return this.http.post(`${this.apiUrl}/expenses`, transaction);
  }

  getTransactions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/expenses`);
  }

  getTransaction(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/expenses/${id}`);
  }

  updateTransaction(transaction: ITransaction): Observable<any> {
    return this.http.put(`${this.apiUrl}/expenses/${transaction.id}`, transaction);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/expenses/${id}`);
  }

}
