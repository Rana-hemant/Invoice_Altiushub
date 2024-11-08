const mongoose = require('mongoose')

const headerSchema = new mongoose.Schema({
    id:{
        type: number,
        required: true,
        unique: true
    },
    date:{
        type: string,
        required: true,
    },
    InvoiceNumber:{
        type: number,
        required: true,
    },
    CustomerName:{
        type: string,
        required: true,
    },
    BillingAddress:{
        type: string,
        required: true,
    },
    ShippingAddress:{
        type: string,
        required: true,
    },
    GSTIN:{
        type: string,
        required: true,
    },
    TotalAmount:{
        type: DECIMAL,
        required: true,
    }
})

module.exports = mongoose.model('header', headerSchema)