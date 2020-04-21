const app = require('express')()
module.exports = { path: '/api', handler: app }

const test = require('./test')
const getExperts = require('./experts/get')
const postExperts = require('./experts/post')

app.use(test)
app.use(getExperts)
app.use(postExperts)


app.get('/hello', (req, res) => {
    console.log('hello nuxt in text')
    res.send('world')
})