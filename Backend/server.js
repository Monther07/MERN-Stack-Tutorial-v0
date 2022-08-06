const express = require('express')

// express app
const app = express()

// listen for requst
app.listen(4000, () => {
  console.log('Listining to the port 4000')
})
