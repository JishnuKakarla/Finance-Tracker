package com.finance.Service;

import com.finance.Model.Transaction;
import com.finance.Repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository repository;

    public List<Transaction> getAllTransactions() {
        return repository.findAll();
    }

    public Transaction addTransaction(Transaction transaction) {
        return repository.save(transaction);
    }


    public Transaction updateTransaction(String id, Transaction updated) {
        updated.setId(id);
        return repository.save(updated);
    }

    public void deleteTransaction(String id) {
        repository.deleteById(id);
    }

    public Optional<Transaction> getTransactionById(String id) {
        return repository.findById(id);
    }

     public List<Transaction> getTransactionsByBankAccount(String bankAccount) {
        return repository.findByBankAccount(bankAccount);
    }

    public List<Transaction> getTransactionsByPaymentMethod(String paymentMethod) {
        return repository.findByPaymentMethod(paymentMethod);
    }
}