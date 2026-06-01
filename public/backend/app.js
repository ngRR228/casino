
import cookieParser from 'cookie-parser';
import express from 'express';
import { db, Users, Posts } from './models.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { redirect } from "react-router";
import { where } from "sequelize";


const app = express()

const SECRET_KEY = '123'

app.set('view engine', 'ejs');
app.use(express.urlencoded())
app.use(cookieParser())
app.use(express.json())

app.get('/registration', (req, res) => {
    res.json('meow', {
        error:null,
        greeting:'whats up'
    })
})

app.post('/registration', async (req, res) => {
         console.log(req.body);
       const  {username, password} = req.body
      
       

    try{
        if(!username || !password) throw new Error('fill the gaps!!!')
        
            const hashed = await bcrypt.hash(password, 10)

            await Users.create({
               username,
               password: hashed
            })

            res.redirect('/login')

    }catch(e) {
        res.status(400).json({error: e.message})
    }
})

console.log('server is running');


app.listen(5173, () => {
    console.log('backend is running on port 5173');
    
})