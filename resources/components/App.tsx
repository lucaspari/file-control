import axios from 'axios';
import React from 'react'
import Seller from '../models/Seller';
import Customer from '../models/Customer';
import Transaction from '../models/Transaction';

export const App = () => {
  const sellerID = '001';
  const customerID = '002';
  const transactionID = '003';
  const handleFile = async(e) =>{
    e.preventDefault();
    const textFromFile = await openFile(e);
    const {customers,sellers,transactions } = setCustomersSellersAndTransactions(textFromFile)
    formatTransaction(transactions[0])
    
  }
  const openFile = (e) =>{
    return new Promise((resolve) =>{
      const reader = new FileReader();
      reader.onload = async(e) =>{
        const text = (e.target?.result);
        resolve(text as String);
      }
      reader.readAsText(e.target.files[0]);
    })
  }
  const setCustomersSellersAndTransactions =(file) =>{
      let lines = file.split('\r\n');
      const customers : Customer[] = [];
      const sellers : Seller[] = [];
      const transactions: Transaction[] = [];
      for(const line of lines){
      if(line.substring(0,3) == sellerID){
        const seller = new Seller(line.split('ç')[1],line.split('ç')[2],line.split('ç')[3]);
        sellers.push(seller)
        
      }
      if(line.substring(0,3) == customerID){
        const customer = new Customer(line.split('ç')[1],line.split('ç')[2],line.split('ç')[3])
        customers.push(customer);
      }
      if(line.substring(0,3) == transactionID){     
        const transaction = new Transaction(line.split('ç')[1],line.split('ç')[2],line.split('ç')[3])
        transactions.push(transaction);

      }
    }
      return {customers,sellers,transactions}

  }
  const sendFileTxt =(sellers,customers) =>{
    console.log(sellers);
    console.log(customers);
    axios.post("http://127.0.0.1:8000/api/sendFile",{
      data: {sellers:sellers,customers:customers},
    });
  }
  const formatTransaction = (transaction : Transaction) =>{
    const removeSquareBrackets = transaction.sales.split('')
    .filter(item => item !== '[' && item !== ']').join('')
    const splitOnComma = removeSquareBrackets.split(',')
    
  }
  return (
    <div>
        <form method="post">
        <h1>File Loader</h1>
        <input onChange={handleFile} type="file" name="" id="" />
        </form>
    </div>
  )
}
