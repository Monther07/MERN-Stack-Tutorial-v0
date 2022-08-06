const mongoose = require('mongoose')

const Schema = mongoose.Schema

const feelingSchema = new Schema({
    feel: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    rank: {
       type: Number,
        required: true
    }
}, { timestemps: true })

module.exports = mongoose.model('feelingModel', feelingSchema)

