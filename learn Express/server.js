const express=require('express');
const mongoose=require('mongoose');

app.use(express.json());
const app=express();
const port=3000;
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/',(req,res,)=>{
    console.log('Request received');           
    res.render('index');

})

const usersRouter=require('./routes/user');
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)});
