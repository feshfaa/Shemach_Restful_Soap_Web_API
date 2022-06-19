const express = require('express')
const { errorHandler } = require('../middleware/errrorMiddleware')
const app = express();

app.use(express.json());
app.use('/product', require('../Server/routes/productRoutes'))
app.use('/shemach', require('../Server/routes/shemachRoutes'))
app.use(errorHandler)

module.exports = app