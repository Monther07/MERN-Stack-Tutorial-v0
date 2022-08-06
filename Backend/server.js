const express = require('express')

// express app
const app = express()

// route
app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome to he app' })
})

// listen for requst
app.listen(4000, () => {
  console.log('Listining to the port 4000')
})
