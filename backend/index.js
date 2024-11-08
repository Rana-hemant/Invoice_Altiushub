const Header = require('./models/header')
const Items = require('./models/items')
const BillSundry = require('./models/billsundry')
const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')
const app = express()

app.use(cors());
app.use(express.json());

PORT = 5000;
const connectDB = new MongoClient('mongodb://localhost:27017/invoice');
const connectToDB = async () =>{
    try{
        await connectDB.connect();
        console.log("Connected to Database successfully");
    }
    catch(error){
        console.log("Database connection failed with error : ",error);
    }
}

connectToDB();

app.post('/header', async (req,res) => {
    const {id, date,InvoiceNumber,CustomerName,BillingAddress,ShippingAddress,GSTIN,TotalAmount} = req.body;
    const newHeader = new Header({id, date,InvoiceNumber,CustomerName,BillingAddress,ShippingAddress,GSTIN,TotalAmount});
    await newHeader.save();
    res.send(newHeader);
})

app.listen(PORT, ()=>{
    console.log("app is running");
})