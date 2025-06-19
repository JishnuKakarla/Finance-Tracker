import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './models/transaction.model'

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080/api/transactions';

  constructor(private http: HttpClient) {}

  // Get all transactions
  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl);
  }

  // Get transaction by ID
  getTransactionById(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/${id}`);
  }

  // Add new transaction
  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.baseUrl, transaction);
  }

  // Update transaction
  updateTransaction(id: string, transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.baseUrl}/${id}`, transaction);
  }

  // Delete transaction
  deleteTransaction(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Search by bank account
  getTransactionsByBank(bankAccount: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/bank/${bankAccount}`);
  }

  // Search by payment method
  getTransactionsByPaymentMethod(method: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/payment/${method}`);
  }
}
