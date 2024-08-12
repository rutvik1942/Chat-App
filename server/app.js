const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
//connect db
require('./db/connection');

//Import files
const Users = require('./models/Users');
const Conversations = require('./models/Conversations');
const Conversation = require('./models/Conversations');

//app use
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT || 8000;
 
//Routes
app.get('/', (req, res) => {
    res.send('Welcome');
})

app.post('/api/register', async (req, res, next) => {
    try{
        const { fullName, email, password } = req.body;

        if(!fullName || !email || !password){
            res.status(400).send('Please fill all required fields');
        }else{
            const isAlreadyExist = await Users.findOne({email});
            if(isAlreadyExist){
                res.status(400).send('User already exists');
            }else{
                const newUser = new Users({ fullName, email });
                bcryptjs.hash(password, 10, (err, hashedPassword) => {
                    newUser.set('password', hashedPassword);
                    newUser.save();
                    next();
                })
                return res.status(200).send('User registered successfully');
            }
        }
    }catch (error){
        console.log(error, 'Error');
    }
})

app.post('/api/login', async (req, res, next) => {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            res.status(400).send('Please fill all required fields');
        }else{
            const user = await Users.findOne({email});
            if(!user){
                res.status(400).send('User email or password is incorrect');
            }else{
                const validateUser = await bcryptjs.compare(password, user.password);
                if(!validateUser){
                    res.status(400).send('User email or password is incorrect');
                }else{
                    const payload = {
                        userId: user.id,
                        email: user.email
                    }
                    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'THIS_IS_JWT_SECRET_KEY';
                    jwt.sign(payload, JWT_SECRET_KEY, {expiresIn: 86400}, async(err, token) => {
                        await Users.updateOne({ _id: user._id},{
                            $set: {token}
                        })
                        user.save();
                        next()
                    })

                    res.status(200).json({user})
                }
            }
        }
    }catch (error){
        console.log(error, 'Error');
    }
})

app.post('/api/conversation', async (req, res) => {
    try{
        const {senderId, receiverId} = req.body;
        const newConversation = new Conversations({ members: [senderId, receiverId]});
        await newConversation.save();
        res.status(200).send('Conversation created Successfully');
    } catch (error){
        console.log(error, 'Error');
    }
})

app.get('/api/conversation/:userId', async(req, res) => {
    try {
        const userId = req.params.userId;
        const conversations = await Conversations.find({members: {$in: [userId]}});
        res.status(200).json(conversations);
    } catch (error) {
        console.log(error, 'Error');
    }
})

app.listen(port, () => {
    console.log('Listening on port' + port);
})
