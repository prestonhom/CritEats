const User = require('../models/user')
const Restaurant = require('../models/restaurant')
const Menu = require('../models/restaurant')
const Review = require('./models/review')

module.exports = {
    createReview,
    
}

function createReview (req, res){
    const review = new Review(req.body)
    try {
     review.save();
      } 
      catch (err) {
        res.status(400).json(err);
      }



}
