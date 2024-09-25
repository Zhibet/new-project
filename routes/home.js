const express = require('express');
const isAuthenticated = require('../authenticated');
const homeRoute = express.Router();
const cardData = require('../models/cards')

homeRoute.get('/',isAuthenticated, async(req,res)=>{
    const user = req.session.username;
    const cards = await cardData.find({});
    const style = '/home.css';
    res.render('home',{cards, style,user})
})

module.exports = homeRoute;