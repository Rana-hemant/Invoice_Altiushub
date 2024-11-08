const mongoose = require('mongoose')
const { DECIMAL } = require('mysql/lib/protocol/constants/types')

const itemsSchema = new mongoose.Schema({
    id:{
        type: number,
        required: true,
        unique: true
    },
    itemName:{
        type: string,
        required: true,
    },
    Quantity:{
        type: DECIMAL,
        required: true,
    },
    Price:{
        type: DECIMAL,
        required: true,
    },
    Amount:{
        type: DECIMAL,
        required: true,
    }
})

module.exports = mongoose.model('items', itemsSchema)