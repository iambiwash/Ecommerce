const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

const userRoutes = require('./routes/user');

//environment variable or you can say constant
env.config();

//mongoDB Connection
//mongodb+srv://iambiwash:<password>@cluster0.7yfxr6q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.7yfxr6q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,

    ).then(() => {
        console.log("Database connected")
    });


app.use(bodyParser());

app.use('/api', userRoutes)



app.listen(process.env.PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`)
});
