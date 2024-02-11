const express = require('express');
const connectDB = require('./config/db');
const dotenv= require('dotenv').config(); //process.env

const port= process.env.PORT;

   connectDB();

const app = express();
// middleware
app.use(express.json()); //convert to useable format(parse)
app.use(express.urlencoded({extended:false}));

app.use('/api/todos' , require("../routes/todoRoutes"));
app.use('/api/todos',require("../routes/userRouteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"))
app.listen(port, () => console.log(`Server started on port ${port}`));
