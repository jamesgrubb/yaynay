console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())
app.use(cors())

app.get('/satus', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

app.listen(process.env.PORT || 8081)