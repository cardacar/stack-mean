const { urlencoded } = require('express');
const express = require('express');
const morgan = require('morgan');

const app = express();


app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(express.json())//json
app.use(urlencoded({extended:false}))//formularios



app.use(require('./routes/products.routes'))

module.exports = app;