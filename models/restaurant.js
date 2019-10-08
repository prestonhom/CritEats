const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    result:{
    id:Number,
    name:String,
    address:String,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    restaurant_photo:String,
    description: String,
    zipcode: String,
    date:String
    }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant;