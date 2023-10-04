


const express = require('express');
const path = require('path');
const router = express.Router();
// const getdatacontroller=require('../Controller/getdatacontrller')
const Etracker = require('../models/expenses');

router.get('/expense/getdata', async (req, res) => {
    try {
    
      const allData = await Etracker.findAll();
      
      res.status(200).json(allData);
    } catch (error) {
      console.error('Error while getting data:', error);
      res.status(500).json({ error: 'Error while getting data' });
    }
  });

module.exports = router;
