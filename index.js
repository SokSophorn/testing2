const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/user', (req, res) => {
    res.send("welcome to user login")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})