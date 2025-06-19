import { Component } from '@angular/core';
import { TransactionService } from '../transaction-service';
import { Transaction } from '../models/transaction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-add',
  standalone:false,
  templateUrl: './transaction-add.html',
  styleUrls: ['./transaction-add.css']
})
export class TransactionAdd {
  transaction: Transaction = {
    date: '',
    amount: 0,
    bankAccount: '',
    paymentMethod: '',
    description: ''
  };

  bankOptions: string[] = ['ICICI', 'SBI', 'HDFC', 'Axis Bank'];
  paymentMethods: string[] = ['UPI', 'Credit Card', 'Debit Card', 'Cash'];

  constructor(private transactionService: TransactionService, private router: Router) {}

  onSubmit() {
    this.transactionService.addTransaction(this.transaction).subscribe(() => {
      alert('Transaction added successfully!');
      this.router.navigate(['']);
    });
  }
}
