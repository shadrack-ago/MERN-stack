const express=require('express');
const app=express();
app.set('view engine', 'ejs');
//creating routes
app.get('/',(req,res)=>{
    console.log('Request received');           
    res.status(200).json({message: "you have an error"});
    res.render('index.html');

})
app.listen(3000)