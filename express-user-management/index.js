const express = require('express')
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.send('hello from users world!')
})

const users = [
    {id:1, name: 'John Doe', email: 'jhon@gmail.com'},
    {id:2, name: 'John Hoe', email: 'jhon@gmail.com'},
    {id:3, name: 'John Boe', email: 'jhon@gmail.com'}
]
app.get('/users', (req,res)=>{
    res.send(users)
})
app.get('/about', (req,res)=>{
    res.send('about page')
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})