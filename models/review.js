const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name:String,
    address:String,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    date: Date.now()
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;