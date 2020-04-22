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
        name: "Aang Supriatna",
        ttl: "Subang, 7 Januari 1985",
        alamat: "Kp. Katomas, RT. 10/04 Desa Sumbersari Kec. Pagaden Kab. Subang, Jawa Barat - 41252",
        ktp: "3060123456789",
        npwp: "3060987654321",
        jenisKelamin: "L",
        riwayatPendidikan: "D3, Teknik Sipil, Politeknik Negeri Bandung, 2007",
        kewarganegaraan: "Indonesia",
        statusPepegawaian: "Karyawan Tetap",
        profesiKeahlian: "Ahli Teknik Sipil",
        jabatan: "Team Leader",
        email: "sigaang@gmail.com",
        pengalamanKerja: "27",
        sertifikasi: "CERT-01",
    }

    db.insert(project, function (err, newProject) {
        db.persistence.compactDatafile()
        if (!err) return res.json(newProject)
    });
})

module.exports = app