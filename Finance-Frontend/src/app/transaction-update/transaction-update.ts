import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction-service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction-update',
  standalone:false,
  templateUrl: './transaction-update.html',
  styleUrls:['./transaction-update.css']
})
export class TransactionUpdate implements OnInit {
  transaction: Transaction = {
    id: '',
    date: '',
    amount: 0,
    bankAccount: '',
    paymentMethod: '',
    description: ''
  };

  bankOptions: string[] = ['HDFC', 'ICICI', 'SBI', 'AXIS'];
  paymentMethods: string[] = ['UPI', 'Card', 'Cash', 'NetBanking'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.transactionService.getTransactionById(id).subscribe({
        next: (data: Transaction) => {
          this.transaction = data;
        },
        error: (err: any) => {
          console.error('Error fetching transaction:', err);
        }
      });
    }
  }

  onUpdate(): void {
    if (!this.transaction.id) return;

    this.transactionService.updateTransaction(this.transaction.id, this.transaction).subscribe({
      next: () => {
        console.log('Transaction updated');
        this.router.navigate(['']);
      },
      error: (err:any) => {
        console.error('Error updating transaction:', err);
      }
    });
  }
}
