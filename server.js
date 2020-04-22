import express, { static } from 'express'
import bodyParser from 'body-parser'
import { join } from 'path'
const app = express()

const port = process.env.PORT || 8080

app.use(static(join(__dirname, 'build')))

app.get('/ping', function (req, res) {
	return res.send('pong')
})

app.get('/', function (req, res) {
	res.sendFile(join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => console.log(`App is listening on port ${port}`))
