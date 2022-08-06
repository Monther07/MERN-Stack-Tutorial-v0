// to let the dotenv work on the project
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const feelingsRoutes = require('./routes/feelings')

// express app
const app = express()

// middelware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// route
app.use('/api/feelings', feelingsRoutes)

//Connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    // listen for requst
    app.listen(process.env.PORT, () => {
      console.log('conneced to db and  listining to the port 4000')
    })
  })
  .catch((error) => {
    console.log(error)
  })


