const express=require('express')
const path =require('path')



module.exports.getexpensepage =(req,res)=>{
    res.sendFile(path.join(__dirname, '../', 'Views', 'expense.html'));

}
