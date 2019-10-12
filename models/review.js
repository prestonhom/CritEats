const reviewSchema = new mongoose.Schema({
    stars: {
        type:Number,
        min:1,
        max:5
    },
    description: String,
    user: {
        type:Schema.types.ObjectId,
        ref:'User'
    },

    
})

  module.exports = mongoose.model('Review', reviewSchema);