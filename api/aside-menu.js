const items = [
    {
        title: 'Apps',
        header: true
    },
    {
        title: 'Dashboard',
        href: '/',
        icon: 'mdi-view-dashboard-outline'
    },
    {
        title: 'Data Administrasi',
        header: true
    },
    {
        title: 'Profil Perusahaan',
        href: '/profile-perusahaan',
        icon: 'mdi-view-grid'
    },
    {
        title: 'TDP',
        href: '/tdp',
        icon: 'mdi-view-column'
    },
    {
        title: 'Izin Usaha',
        icon: 'mdi-view-carousel',
        items: [
            { title: 'SIUP', href: '/izin/siup', icon: 'mdi-check-circle-outline'},
            { title: 'IUJK', href: '/izin/iujk', icon: 'mdi-check-circle-outline'},
        ]
    },
    {
        title: 'Domisili',
        href: '/domisili',
        icon: 'mdi-domain'
    },
    {
        title: 'Pengurus',
        href: '/pengurus',
        icon: 'mdi-account-box-multiple'
    },
    {
        title: 'SBU',
        href: '/sbu',
        icon: 'mdi-view-headline'
    },
    {
        title: 'Saham',
        href: '/saham',
        icon: 'mdi-account-multiple'
    },
    {
        title: 'Landasan Hukum',
        icon: 'mdi-view-compact',
        items: [
            {title: 'Akta Pendirian', href: '/landasan/akta-pendirian' ,icon: 'mdi-check-circle-outline'},
            {title: 'Akta Perubahan', href: '/landasan/akta-perubahan', icon: 'mdi-check-circle-outline'},
        ]
    },
    {
        title: 'Data Teknis',
        header: true
    },
    {
        title: 'Tenaga Ahli',
        href: '/tenaga-ahli',
        icon: 'mdi-account-multiple'
    },
    {
        title: 'Pengalaman',
        href: '/pengalaman',
        icon: 'mdi-view-list'
    },
    {
        title: 'Peralatan',
        href: '/peralatan',
        icon: 'mdi-toolbox'
    },
    {
        title: 'Sertifikat Lain',
        href: '/sertifikat-lain',
        icon: 'mdi-certificate-outline'
    },
    {
        title: 'Data Keuangan',
        header: true
    },
    {
        title: 'Rekening Koran',
        href: '/rekening-koran',
        icon: 'mdi-bank-plus'
    },
    {
        title: 'Laporan Keuangan',
        href: '/laporan-keuangan',
        icon: 'mdi-finance'
    },
    {
        title: 'Bank',
        href: '/bank',
        icon: 'mdi-bank'
    },
    {
        title: 'Data Perpajakan',
        header: true
    },
    {
        title: 'PKP',
        href: '/pkp',
        icon: 'mdi-briefcase-account'
    },
    {
        title: 'Pajak Tahunan',
        href: '/pajak-tahunan',
        icon: 'mdi-briefcase-clock'
    },
    {
        title: 'SPT Masa',
        href: '/spt-masa',
        icon: 'mdi-briefcase-check'
    },
    {
        title: 'Options',
        header: true
    },
    {
        title: 'Inbox',
        href: '/inbox',
        icon: 'mdi-email'
    },
    {
        title: 'Notifikasi',
        href: '/notifikasi',
        icon: 'mdi-bell'
    },
    {
        title: 'Pengaturan',
        href: '/pengaturan',
        icon: 'mdi-tools'
    },
];

const getMenuItems = () =>  items;

export {
    getMenuItems
};
