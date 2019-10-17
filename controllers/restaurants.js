const express = require('express');
const db = require('../models/restaurant.js');

module.exports = {
    index
}

async function index(req,res){
    const restaurant = await db.Restaurant.find({});
    return res.status(200).json(restaurant);
}
