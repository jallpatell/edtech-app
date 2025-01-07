const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const key = require('./jwtn')

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        "message":"you are at homepage yada yada !"
    })
})

app.get('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    res.json({
        "message": "you are signed in"
    })
})
app.get('/signup', (req, res) => {

})

app.listen(3000, () => { console.log('start')})