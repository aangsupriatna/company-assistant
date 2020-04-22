const header = [
    {
        text: "Nama",
        align: "start",
        sortable: false,
        value: "name",
        class: "subtitle-2 font-weight-bold"
    },
    {
        text: "TTL",
        value: "ttl",
        class: "subtitle-2 font-weight-bold"
    },
    {
        text: "Riwayat Pendidikan",
        value: "riwayatPendidikan",
        class: "subtitle-2 font-weight-bold"
    },
    {
        text: "Pengalaman",
        value: "pengalamanKerja",
        align: "center",
        class: "subtitle-2 font-weight-bold"
    },
    {
        text: "Profesi Keahlian",
        value: "profesiKeahlian",
        align: "center",
        class: "subtitle-2 font-weight-bold"
    },
    {
        text: "Actions",
        align: "center",
        value: "actions",
        align: "center",
        class: "subtitle-2 font-weight-bold",
        width: "150px"
    }
]

const headers = () => {
    return header
}
export {
    headers
}