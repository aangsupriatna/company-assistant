const headers = [
    {
        text: "Nama",
        align: "start",
        sortable: false,
        value: "name"
    },
    { text: "TTL", value: "ttl", class: 'subtitle-2 font-weight-bold' },
    // { text: "Alamat", value: "alamat", class: 'subtitle-2 font-weight-bold' },
    // { text: "KTP", value: "ktp", class: 'subtitle-2 font-weight-bold' },
    // { text: "NPWP", value: "npwp", class: 'subtitle-2 font-weight-bold' },
    // { text: "Jenis Kelamin", value: "jenisKelamin", class: 'subtitle-2 font-weight-bold' },
    { text: "Riwayat Pendidikan", value: "riwayatPendidikan", class: 'subtitle-2 font-weight-bold' },
    // { text: "Kewarganegaraan", value: "kewarganegaraan", class: 'subtitle-2 font-weight-bold' },
    // { text: "Status Kepegawaian", value: "statusPepegawaian", class: 'subtitle-2 font-weight-bold' },
    // { text: "Jabatan", value: "jabatan", class: 'subtitle-2 font-weight-bold' },
    // { text: "Email", value: "email", class: 'subtitle-2 font-weight-bold' },
    { text: "Pengalaman", value: "pengalamanKerja", align: "center", class: 'subtitle-2 font-weight-bold' },
    { text: "Profesi Keahlian", value: "profesiKeahlian", align: "center", class: 'subtitle-2 font-weight-bold' },
    // { text: "Sertifikasi Keahlian", value: "sertifikasi", align: "center", class: 'subtitle-2 font-weight-bold' },
    { text: 'Actions', align: 'center', value: 'actions', align: "center", class: 'subtitle-2 font-weight-bold', width: '150px' },
]

const items = [
    {
        uuid: "001",
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
    },
    {
        uuid: "002",
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
]

const getHeader = () => {
    return headers
}

const getItems = () => {
    return items
}

export {
    items,
    getHeader,
    getItems
}
