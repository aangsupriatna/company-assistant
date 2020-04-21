const app = require('express')()
const Datastore = require('nedb')

const path = 'experts'

app.post('/experts/create', (req, res) => {
    let db = new Datastore({
        filename: __dirname + `/../db/experts.json`,
        autoload: true
    });

    let project =
    {
        name: "John Doe",
        ttl: "Jakarta, 28 Februari 1990",
        alamat: "Jl. Gatot Subroto No. 27, Jakarta",
        ktp: "317123456789",
        npwp: "32201234567",
        jenisKelamin: "L",
        riwayatPendidikan: "S1, Teknik Arsitektur, Universitas Indonesia, 2010",
        kewarganegaraan: "Indonesia",
        statusPepegawaian: "Tidak Tetap",
        profesiKeahlian: "Ahli Arsitektur",
        jabatan: "Tenaga Ahli",
        email: "john@doe.com",
        pengalamanKerja: "12",
        sertifikasi: "CERT-02",
    }

    db.insert(project, function (err, newProject) {
        db.persistence.compactDatafile()
        if (!err) return res.json(newProject)
    });
})

module.exports = app