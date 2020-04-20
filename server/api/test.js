const app = require('express')()
const Datastore = require('nedb')

app.post('/create', (req, res) => {
    let db = new Datastore({
        filename: __dirname + '/db/test.db',
        autoload: true
    });

    let doc = {
        hello: 'world'
    };

    db.insert(doc, function (err, newDoc) {
        db.persistence.compactDatafile()
        if (!err) return res.json(newDoc)
    });
})

module.exports = app