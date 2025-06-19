package com.finance.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "transactions")
//@Document - Map a java class to MongoDB collection
public class Transaction {
    @Id
    private String id;
    private String paymentMethod; // e.g. UPI, Credit Card
    private double amount;
    private Date date;
    private String bankAccount;   // e.g. BOB, ICICI
    private String description;
    
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getPaymentMethod() {
        return paymentMethod;
    }
    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    public double getAmount() {
        return amount;
    }
    public void setAmount(double amount) {
        this.amount = amount;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public String getBankAccount() {
        return bankAccount;
    }
    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount;
    }
    @Override
    public String toString() {
        return "Transaction [id=" + id + ", paymentMethod=" + paymentMethod + ", amount=" + amount + ", date=" + date
                + ", bankAccount=" + bankAccount + ", Description=" + description + "]";
    }
    
    

    
}