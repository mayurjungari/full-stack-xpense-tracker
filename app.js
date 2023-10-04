
const express = require('express');
const bodyparser=require('body-parser')
const path =require('path')
const app = express();
const Etracker=require('./models/expenses');

const expenseroute =require('./Route/expense')

const postdataroute =require('./Route/postdata')
const getDataroute =require('./Route/getdata')

const deletedataroute=require('./Route/deleteddata')



//--------------
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'Public')));




  

app.use(expenseroute)
app.use(postdataroute)
app.use(getDataroute)





app.delete('/expense/deletedata/:id',async (req,res)=>{
    const id=req.params.id;
    try {
        const deleteexpense= await Etracker.destroy({
            where :{
                id :id
            }
        });
        if(deleteexpense)
        {
            res.status(204).send();
        }
        else{
            res.status(404).json({error :'expense not found'})
        }
    } catch (error) {
        console.log('erroe while deleting')
        res.status(500).json({error :'Internal error server'})
        
    }
})


 


app.use((req,res)=>{
    res.send('Not Found')
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
