const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name:String,
    address:String,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    menu:{
        type:Schema.Types.ObjectId,
        ref:'Menu'
    },
    stars: Number,
    description: String,
    date: Date.now()
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;