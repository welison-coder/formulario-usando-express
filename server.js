const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios',(req, resp) => {
    console.log(req.body)
    resp.send('parabens')
})

app.listen(3001)

