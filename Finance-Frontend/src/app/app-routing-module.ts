import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionList } from './transaction-list/transaction-list';

const routes: Routes = [
  {path:'', component:TransactionList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
