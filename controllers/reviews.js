const User = require('../models/user')
const Restaurant = require('../models/restaurant')
const Menu = require('../models/restaurant')
const Review = require('./models/review')

module.exports = {
    index,
    create,
    delete
}

async function index(req, res) {
    Restaurant.findById({_id:req.params.id})
    Menu.findById({{},
}