const path = require('path')
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json())


app.get('/', (req, res) => {
  res.render('./index.html')
})

app.get('/signup', (req, res) => {
    res.redirect('/signup')
})

app.listen(3000, () => console.log(`listening on PORT ${PORT}`))

module.exports = app;