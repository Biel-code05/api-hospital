const {Schema} = require('mongoose')
const mongoose = require('mongoose')

const callSchema = new mongoose.Schema({
    id:{type: String, required: true, unique: true},
    name:{type: String, required: true},
    hospital:{type: Schema.Types.Mixed, required: true, }
},{strict: false})

const Call = mongoose.model('Call', callSchema, 'calls')

module.exports = {Call}