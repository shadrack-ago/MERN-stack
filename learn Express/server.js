const express=require('express');
const app=express();
app.set('view engine', 'ejs');
//creating routes
app.get('/',(req,res)=>{
    console.log('Request received');           
    res.render('index');

})
app.listen(3000)