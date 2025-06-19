import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction-service';
import { Transaction } from '../models/transaction.model';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-transaction-list',
  standalone:false,
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.css']
})
export class TransactionList implements OnInit {
  transactions: Transaction[] = [];
  searchQuery: string = '';

  constructor(private service: TransactionService, private router: Router) {}

   ngOnInit() {
    this.loadTransactions();

    // Reload data on navigation to this route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
        this.loadTransactions();
      });
  }

  navigateToAdd(): void {
    this.router.navigate(['/add']);
  }
  loadTransactions() {
    this.service.getAllTransactions().subscribe(data => {
      this.transactions = data;
      console.log('Fetched transactions:', data);
    });
  }


filteredTransactions() {
  if (!this.searchQuery) return this.transactions;

  const query = this.searchQuery.toLowerCase();

  return this.transactions.filter(txn =>
    txn.date?.toLowerCase().includes(query) ||
    txn.amount?.toString().includes(query) ||
    txn.bankAccount?.toLowerCase().includes(query) ||
    txn.paymentMethod?.toLowerCase().includes(query) ||
    txn.description?.toLowerCase().includes(query)
  );
}

  updateTransaction(id: string) {
    this.router.navigate(['/update', id]);
  }

  deleteTransaction(id: string) {
    this.service.deleteTransaction(id).subscribe(() => {
      this.loadTransactions();
    });
  }
}
