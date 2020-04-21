const app = require('express')()
const Datastore = require('nedb')

app.post('/experts/create', (req, res) => {
    let db = new Datastore({
        filename: __dirname + '/db/experts.db',
        autoload: true
    });

    let project =
    {
        name: "Aang Supriatna",
    }

    db.insert(project, function (err, newProject) {
        db.persistence.compactDatafile()
        if (!err) return res.json(newProject)
    });
})

module.exports = app