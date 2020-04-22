const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const request = require('request')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.get('/ping', function (req, res) {
  return res.send('pong')
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const apiToken = 'Bearer 42b9f17d6415491581c7b393b2e6ed4c'
const baseUrl = 'http://newsapi.org/v2/'

app.get('/api/*', function (req, res) {
  const finalUrl = req.url.replace('/api/', baseUrl)
  request.get({
    headers: {
      Authorization: apiToken
    },
    url: finalUrl,
    timeout: 60000
  }, (error, response, body) => {
    if (error) {
      console.log(error)
      res.status(500).send(error)
    } else {
      if (response.statusCode === 200) {
        res.status(response.statusCode)
          .set({
            'Content-Type': response.headers['content-type'],
            'Content-Length': response.headers['content-length']
          })
          .send(body)
      } else {
        console.log(req)
        console.log(response)
        res.status(response.statusCode)
          .set('Content-Type', 'text/plain')
          .send(body)
      }
    }
  })
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`App is listening on port ${port}`))
