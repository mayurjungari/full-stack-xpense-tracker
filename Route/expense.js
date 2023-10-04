
const express = require('express');
const path = require('path');
const router = express.Router();
const Etracker = require('../models/expenses');
// const expensecontroller=require('../Controller/expensecontroller')


router.get('/expense', (req, res) => {
    res.sendFile(path.join(__dirname,'../', 'Views', 'expense.html'));
});


module.exports = router;