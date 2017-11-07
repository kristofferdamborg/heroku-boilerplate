const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))

app.use(bodyParser.json())

require('./routes')(app)

app.listen(config.port)

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  // Express will serve up production assets
  app.use(express.static(path.resolve('client', 'dist')), { maxAge: '1d' })

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'dist', 'index.html'))
  })
}