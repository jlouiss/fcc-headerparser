const express = require('express')
const cors = require('cors')

const api = require('./api')

const app = express()

app.use(cors({optionSuccessStatus: 200}))
app.use(express.static('public'))
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`)
  next()
})
app.use('/api', api)

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

module.exports = app
