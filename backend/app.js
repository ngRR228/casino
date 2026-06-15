
import cookieParser from 'cookie-parser';
import express from 'express';
import { db, Users, Posts } from './models.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { redirect } from "react-router";
import { where } from "sequelize";
import cors from 'cors'

const app = express()


app.use(cors({
  origin: 'http://localhost:5173'
}))


const SECRET_KEY = '123'


app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.json())



app.get('/registration', (req, res) => {
    res.json( {
        message:'meow',
        error:null,
        greeting:'whats up'
    })
})

app.post('/registration', async (req, res) => {
         
       const  {username, password} = req.body
      
       console.log('BODY:', req.body)
console.log('USERNAME:', username)
console.log('PASSWORD:', password)

    try{
        if(!username || !password){
            // return res.status(400).json({error:'fill the gaps'})
            throw new Error('fill the gaps')
        }
        
            const hashed = await bcrypt.hash(password, 10)

            await Users.create({
               username,
               password: hashed
            })


            res.json({
                success:true
            })

          
    }catch(e) {
          


            console.log(e.message);
            
           
            return res.status(400).json({error: e.message})
        }
    });


app.get('/login', (req, res) => {
   res.json({
    message:'nice',
    error:null
   })
})

    app.get('/logout', (req, res) => {
            res.clearCookie('token')
            res.redirect('/login')
        })


       


app.post('/login', async (req, res) => {
    const {username, password} = req.body

    try{
        const user = await Users.findOne({where:{username:username}})
        
        if(!user){
            return res.status(401).json({
                error:'invalid username or password'
            })
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){
            return res.status(401).json({
                error: 'invalid username or password'
            })
        }

        const token = jwt.sign({id:user.id}, SECRET_KEY, {expiresIn: '1h'})

        res.cookie('token', token, {
            httpOnly: true
        })

        res.json({
            success:true
        })

        

        
    }catch(e){
        return res.status(401).json({error: 'invalid username or password'})
    }

});


        function checkAuth (req, res, next) {
            const token = req.cookies.token
             console.log(token);
            if(!token){
               
                
             return   res.redirect('/login')
            }   try{
                const decoded = jwt.verify(token, SECRET_KEY)

                req.userId = decoded.id

                next()

            } catch(e){
                return res.redirect('/login')
            }
           
        }

    
             app.get('/', checkAuth, async (req, res) => {
            const user = await Users.findByPk(req.userId)
            res.render('login', {username:user.username})
        })


    

      
    

console.log('server is running');


db.sync({alter: true}).then(() => {
app.listen(3000, () => {
    console.log('backend is running on port 3000');
    
}) 
})

