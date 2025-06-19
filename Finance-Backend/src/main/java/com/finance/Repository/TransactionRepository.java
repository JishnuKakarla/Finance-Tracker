package com.finance.Repository;

import com.finance.Model.Transaction;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TransactionRepository extends MongoRepository<Transaction, String> {
    List<Transaction> findByBankAccount(String bankAccount);
    //db.transactions.find({ bankAccount: "ICICI" })
    List<Transaction> findByPaymentMethod(String paymentMethod);
}