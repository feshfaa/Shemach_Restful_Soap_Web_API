const app = require('./app')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
