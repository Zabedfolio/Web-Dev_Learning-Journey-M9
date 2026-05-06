const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

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

app.post('/users',(req,res)=>{
    console.log('Data in the request:', req.body);

    const newUser = req.body;
    newUser.id = users.length+1;
    users.push(newUser);

    res.send({success: true,data: newUser, message: 'post method is working'})
})

app.get('/about', (req,res)=>{
    res.send('about page')
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})