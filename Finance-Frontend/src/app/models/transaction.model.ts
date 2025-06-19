export interface Transaction {
  id?: string;
  paymentMethod: string;
  amount: number;
  date: string;
  bankAccount: string;
  description: string;
}
