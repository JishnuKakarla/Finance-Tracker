import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TransactionList } from './transaction-list/transaction-list';
import { TransactionAdd } from './transaction-add/transaction-add';
import { TransactionUpdate } from './transaction-update/transaction-update';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    App,
    TransactionList,
    TransactionAdd,
    TransactionUpdate
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:TransactionList},
      {path:'add', component:TransactionAdd},
      {path: 'update/:id', component: TransactionUpdate}

    ])
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
