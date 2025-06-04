const express=require('express');
const app=express();
const port=3000;
app.set('view engine', 'ejs');
//creating routes
app.get('/',(req,res,)=>{
    console.log('Request received');           
    res.render('index');

})

const usersRouter=require('./routes/users');
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)});
