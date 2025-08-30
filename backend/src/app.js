import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import LegistativeRoutes from './routes/LegistativeRoutes.js';
import {connectDB} from './config/db.js'; 




const app = express(); 
const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json());

//MIDDLEWARE
// app.use()


app.use("/candidates", LegistativeRoutes);



connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })
})
