// console.log('welcome to express js');
import express from 'express'

//create an express app
const app= express()
const port = +process.env.PORT || 4000

//router--destination ,where are we heading to
app.get('/',(req,res)=>{
    res.json({
        status: res.statusCode,
        msg: 'you\'re homee'
    });

});

app.get('/about',(req,res)=>{
    res.json({
        status: res.statusCode,
        msg: 'abt page'
    })

})
app.all('*',(req,res)=>{
    res.json({
        status: 404,
        msg: '404 page'
    })

})
app.listen(port);
