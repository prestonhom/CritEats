const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/reviews');


router.post('/review', reviewsCtrl.createReview)
router.get('/reviews', reviewsCtrl.indexReview)


module.exports = router;