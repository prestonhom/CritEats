const User = require('../models/user')
const Restaurant = require('../models/restaurant')
const Review = require('../models/review')

// const db =('../models')

module.exports = {
    indexReview,
    createReview,
    // showReview,
    // editReview
}

async function indexReview(req,res){
  try {
    let reviews = await Review.find({})
    res.json(reviews)
  }
  catch(err){
    res.status(400).json(err)
  }
}

async function createReview (req, res){
  try {
    let review = await new Review(req.body)
    review = await review.save();
    res.json(review)
  } 
    catch (err) {
      res.status(400).json(err);
  }
}

// async function showReview(req,res){
//   try {
//   const review = Review.findById(req.params.id)
    
//     res.json(review)
//   }
//   catch (err){
//     res.status(404).json(err)
//   }

// }
