const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors({optionSuccessStatus: 200}))
app.use(express.static('public'))
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`)
  console.log(req)
  next()
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

module.exports = app
