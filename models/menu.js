const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const menuSchema = new Schema({
    id:Number,
    name:String,
    description :String,
    resturant_id:{
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    menu_photo: String,
    categories: [categorySchema]
})

const Menu= mongoose.model('Menu', menuSchema)

module.exports = Menu;