// console.log('welcome to express js');
import express from 'express'
import path from 'path'
//create an express app
const app= express()
const router=express.Router()

app.use(
    router,
    express.static("./static")
)

app.use(router)
const port = +process.env.PORT || 4000

//router--destination ,where are we heading to
//Routers
// router.get('^/$|?express' ,display,(req,res)=>{
//     res.json({
//         status: res.statusCode,
//         msg: 'you\'re homee'
//     });

// });
router.get('^/$|/express' ,display,(req,res)=>{
    res.status(200).sendFile(path.resolve("./static/html/index.html"))
    });




router.get('/about',(req,res)=>{
    res.json({
        status: res.statusCode,
        msg: 'abt page'
    })

});
// app.all('*',(req,res)=>{
//     res.json({
//         status: 404,
//         msg: '404 page'
//     })

// })
app.listen(port);

//middleware
function display(req,res,next) {
console.log("hello there");
next()
    
}
