const headers = [
    { text: 'Nama Proyek',  align: 'start', sortable: false, value: 'name', class: 'subtitle-2 font-weight-bold' },
    { text: 'Klien', value: 'client', class: 'subtitle-2 font-weight-bold' },
    // { text: 'Lokasi', value: 'location', class: 'subtitle-2 font-weight-bold' },
    { text: 'Type', value: 'type', class: 'subtitle-2 font-weight-bold' },
    { text: 'Nilai Kontrak (Rp)', align: 'right', value: 'value', class: 'subtitle-2 font-weight-bold' },
    { text: 'Tanggal', align: 'center', value: 'date', class: 'subtitle-2 font-weight-bold' },
    { text: 'Progress', align: 'center', value: 'progress', class: 'subtitle-2 font-weight-bold' },
    { text: 'Actions', align: 'center', value: 'actions', class: 'subtitle-2 font-weight-bold' },
];

const projects = [
    {
        id: '0001',
        name: 'Consultan Management Pembangunan Gedung Sekolah Berbasis Partisipasi Masyarakat CLuster 8',
        client: 'Kemendikbud',
        location: 'NTT',
        type: 'Pemberdayaan Masyarakat',
        value: '2.400.000.000',
        date: new Date().toLocaleDateString(),
        progress: 45,
        color: 'red',
    },
    {
        id: '0002',
        name: 'Ice cream sandwich',
        client: 'Kementerian PUPR',
        location: 'Jakarta',
        type: 'MICE',
        value: '560.000.000',
        date: new Date().toLocaleDateString(),
        progress: 70,
        color: 'red',
    },
    {
        id: '0003',
        name: 'Eclair',
        client: 'Dinas Cipta Karya DKI Jakarta',
        location: 'Jakarta',
        type: 'Manajemen Konstruksi',
        value: '1.300.000.000',
        date: new Date().toLocaleDateString(),
        progress: 25,
        color: 'red',
    },
    {
        id: '0004',
        name: 'Cupcake',
        client: 'Kementerian PUPR',
        location: 'Jakarta',
        type: 'Konstruksi',
        value: '3.250.000.000',
        date: new Date().toLocaleDateString(),
        progress: 40,
        color: 'red',
    },
    {
        id: '0005',
        name: 'Gingerbread',
        client: 'Kementerian PUPR',
        location: 'Jakarta',
        type: 'Community Development',
        value: '6.100.000.000',
        date: new Date().toLocaleDateString(),
        progress: 95,
        color: 'red',
    },
    {
        id: '0006',
        name: 'Jelly bean',
        client: 'Kementerian PUPR',
        location: 'Jakarta',
        type: 'Perencanaan',
        value: '250.000.000',
        date: new Date().toLocaleDateString(),
        progress: 100,
        color: 'red',
    },
    {
        id: '0007',
        name: 'Lollipop',
        client: 'Kementerian PUPR',
        location: 'Jakarta',
        type: 'Pengawasan Gedung',
        value: '450.000.000',
        date: new Date().toLocaleDateString(),
        progress: 31,
        color: 'red',
    },
    {
        id: '0008',
        name: 'Honeycomb',
        client: 'Kementerian PUPR',
        location: 'Jakarta',
        type: 'Community Development',
        value: '100.000.000',
        date: new Date().toLocaleDateString(),
        progress: 80,
        color: 'red',
    },
    {
        id: '0009',
        name: 'Donut',
        client: 'Kementerian PUPR',
        location: 'Jakarta',
        type: 'MICE',
        value: '800.000.000',
        date: new Date().toLocaleDateString(),
        progress: 15,
        color: 'red',
    },
    {
        id: '0010',
        name: 'KitKat',
        client: 'Kementerian PUPR',
        location: 'Jakarta',
        type: 'Pemberdayaan Masyarakat',
        value: '1.700.000.000',
        date: new Date().toLocaleDateString(),
        progress: 2,
        color: 'red',
    },
];

const getHeader = () => {
    return headers;
};

const getProjects = () => {
    return projects;
};

export {
    getHeader,
    getProjects
};
