const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../../controllers/restaurants');


/*---------- Public Routes ----------*/
router.get('/', restaurantsCtrl.index)

/*---------- Protected Routes ----------*/

module.exports = router;