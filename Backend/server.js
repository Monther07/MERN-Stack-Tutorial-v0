// to let the dotenv work on the project
require('dotenv').config()
const express = require('express')
const fellingsRoutes = require('./routes/feelings')


// express app
const app = express()

// middelware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// route
app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome to the app' })
})

// listen for requst
app.listen(process.env.PORT, () => {
  console.log('Listining to the port 4000')
})
