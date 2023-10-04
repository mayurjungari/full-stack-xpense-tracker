const express = require('express');
const path = require('path');
const Etracker = require('../models/expenses');
module.exports.postData= async (req, res) => {
    try {
      const { price, desc, reason } = req.body;
      const newExpense = await Etracker.create({
        Price: price,
        Desc: desc,
        Reason: reason,
      });
      res.status(201).json(newExpense);
    } catch (error) {
      console.error('Error in posting ');
      res.status(500).json({ error: 'Error while posting data' });
    }
  };