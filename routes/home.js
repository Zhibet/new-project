const express = require('express');
const isAuthenticated = require('../authenticated');
const homeRoute = express.Router();
const cardData = require('../models/cards')

homeRoute.get('/',isAuthenticated, async(req,res)=>{
    const cards = await cardData.find({});
    console.log(cards)
    res.render('home',{cards})
})

module.exports = homeRoute;