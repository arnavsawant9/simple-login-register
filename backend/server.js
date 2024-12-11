const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');

//middleware for paring JSON
app.use(express.json());

//CORS
app.use(cors());

//Now that you have been registering you need to put the data into mongodb right??
app.post('/register', async(req,res)=>{
    try{
        const {username,password} = req.body;
        //console.log(req.body);
        const user = new User({username, password});
        await user.save();
        res.status(201).json({message: "Registration successful"});
    } catch(error){
        res.status(500).json({error: "registration failed"});
    }
})

//for login purposes
app.post('/login', async(req,res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username, password});

        if(!user){
            return res.status(401).json({error: "Invalid username or password"});
        }

        res.status(200).json({message: "login successful"})
    } catch (error) {
        res.status(500).json({error: "some error occured"});
    }
})

connectDB();

app.listen(port, ()=>{
    console.log(`App is listening at ${port}`);
})