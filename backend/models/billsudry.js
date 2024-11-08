const mongoose = require('mongoose')
const { DECIMAL } = require('mysql/lib/protocol/constants/types')

const BillSundrySchema = new mongoose.Schema({
    id:{
        type: number,
        required: true,
        unique: true
    },
    billSundryName:{
        type: string,
        required: true,
    },
    Amount:{
        type: DECIMAL,
        required: true,
    }
})

module.exports = mongoose.model('billsundry', BillSundrySchema)