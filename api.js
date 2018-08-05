const express = require('express')
const router = express.Router()

router.get('/whoami', (req, res) => {
  const ipaddress = req.headers['x-forwarded-for'].split(',').shift() || req.connection.remoteAddress.split(':').pop()
  const { ['accept-language']: language = '', ['user-agent']: software = '' } = req.headers
  res.json({
    ipaddress, language, software
  })
})

module.exports = router