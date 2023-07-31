import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {config} from 'dotenv'
import router from './router/route.js';
// import { Connection } from 'mongoose';

// import connection file
import connect from './database/connection.js'

const app = express();

// APP MIDDLEWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

// Import Connection file

// APPLICATION PORT
const port = process.env.PORT || 5000;

connect();

// Routes
app.use('/api', router)

app.get('/', (req,res) =>{
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
});


app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})