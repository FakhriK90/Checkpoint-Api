const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const connectdb = require('./DataBase/connectdb')
const person= require('./routes/person')

require ("dotenv").config()

// connect to database
connectdb();

app.use(express.json())

app.use('/api', person)

app.listen(port, (err) => {
    err
      ? console.log('OOPS!!! Somthing went wrong', err)
      : console.log(`Listening on port: ${port}`)
  })