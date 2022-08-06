require('dotenv').config()
const express = require('express')

// express app
const app = express()

// route
app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome to the app' })
})

// listen for requst
app.listen(process.env.PORT, () => {
  console.log('Listining to the port 4000')
})
