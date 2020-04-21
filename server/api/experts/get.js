const app = require('express')()
const Datastore = require('nedb')


app.get('/experts', (req, res) => {
    let db = new Datastore({
        filename: __dirname + `/../db/experts.json`,
        autoload: true
    });

    // return new Promise((resolve, reject) => {
    //     db.find({}, function (err, docs) {
    //         if (err) reject(err);
    //         resolve(docs);
    //     });
    // })

    db.find({}, function (err, expert) {
        if (!err) return res.json(expert)
    });
})

module.exports = app