import axios from 'axios';
import React from 'react'
import Seller from '../models/Seller';
import Customer from '../models/Customer';
export const App = () => {
  const sellerID = '001';
  const customerID = '002';
  const [sellers,setSellers] = React.useState<Seller[]>([])
  const [customers,setCustomers] = React.useState<Customer[]>([])
  const handleFile = (e) =>{
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async(e) =>{
      const text = (e.target?.result);
      let lines = (text as String).split('\r\n');
      lines.forEach((item) =>{
        if(item.substring(0,3) == sellerID){
          const seller = new Seller(item.split('ç')[1],item.split('ç')[2],item.split('ç')[3]);
          setSellers([...sellers,seller]);
        }
        if(item.substring(0,3) == customerID){
          const customer = new Customer(item.split('ç')[1],item.split('ç')[2],item.split('ç')[3])
          console.log(customer);
          setCustomers([...customers,customer]);
        }
      })
      // console.log(sellers);
      // console.log(customers)
    };
    reader.readAsText(e.target.files[0]);
    
  }
  const sendFileTxt =(sellers,customers) =>{
    axios.post("http://127.0.0.1:8000/api/sendFile",{
      data: {sellers:sellers,customers:customers},
    });
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
