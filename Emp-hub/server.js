const express = require('express');
require('./db')
const session = require('express-session');
const mongoose = require('mongoose')
const userNormalRoute = require('./route/normalRoutes/userNormalRoute')
const apiRoute = require('./route/apiRoutes/userApiRoute')
const dashRoute = require('./route/apiRoutes/userdasRoute')

const hbs = require('hbs')
const path = require('path')
const app = express();

mongoose.set('useCreateIndex', true)
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(express.urlencoded({extended:false}))

app.use(session({
    secret:"JustSecret",
    store: new (require('express-sessions'))({
        storage: 'mongodb',
        instance: mongoose, // optional
        host: 'localhost', // optional
        port: 27017, // optional
        db: 'test', // optional
        collection: 'sessions', // optional
        expire: 86400 // optional
    }),
    name:"EmployeeHistory",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*5,
        httpOnly:true,
        secure:false,
        sameSite:"strict"
    }
}))

app.use(userNormalRoute);
app.use(apiRoute);
app.use(dashRoute)

app.listen(process.env.port || 8080, ()=>console.log('Server is up at port 8080'))
