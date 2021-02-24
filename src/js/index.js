const express  = require('express')

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('hello world from get');
})


app.post('/post',(req,res)=>{
    res.send('hello world from post')
})
app.listen(port,()=>{
    console.log("hello world for your!")
})
