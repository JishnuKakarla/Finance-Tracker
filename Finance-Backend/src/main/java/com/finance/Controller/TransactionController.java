package com.finance.Controller;

import com.finance.Model.Transaction;
import com.finance.Service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionService service;

    @GetMapping
    public List<Transaction> getAll() {
        return service.getAllTransactions();
    }

    @PostMapping
    public Transaction add(@RequestBody Transaction transaction) {
        return service.addTransaction(transaction);
    }

    @PutMapping("/{id}")
    public Transaction update(@PathVariable String id, @RequestBody Transaction transaction) {
        return service.updateTransaction(id, transaction);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.deleteTransaction(id);
    }

    @GetMapping("/{id}")
    public Optional<Transaction> getById(@PathVariable String id) {
        return service.getTransactionById(id);
    }

    @GetMapping("/bank/{bank}")
    public List<Transaction> getByBank(@PathVariable String bank) {
        return service.getTransactionsByBankAccount(bank);
    }

    @GetMapping("/payment/{method}")
    public List<Transaction> getByPaymentMethod(@PathVariable String method) {
        return service.getTransactionsByPaymentMethod(method);
    }
}
