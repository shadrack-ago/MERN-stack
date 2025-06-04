const express=require('express');
const router=express.Router();

//creating routes
router.get('/',(req,res)=>{
    console.log('Request received');           
    res.render('index');
})

router.get('/new',(req,res)=>{
    console.log('Request received');           
    res.render().json({message: 'New User Page'});
})

module.exports=router;