const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');

app.use(cors());

const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const adminRoutes = require('./routes/admin');

app.use(adminRoutes);

sequelize
.sync()
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})