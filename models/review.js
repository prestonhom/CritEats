const mongoose = require('mongoose');
const Schema = mongoose.Schema
const User = require('./user.js')

const reviewSchema = new Schema({
    stars: {
        type:Number,
        min:1,
        max:5
    },
    description: String,
    userName: String,
    food: String,
    
    
})

module.exports = mongoose.model('Review', reviewSchema);