const app = require('express')()
module.exports = { path: '/api', handler: app }

const test = require('./test')
app.use(test)


app.get('/hello', (req, res) => {
    console.log('hello nuxt in text')
    res.send('world')
})