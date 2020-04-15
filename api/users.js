const items = [
    {
        id: '0001',
        name: 'John Snow',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        level: 'Administrator'
    },
    {
        id: '0002',
        name: 'Brandon Stark',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        level: 'Marketing'
    },
    {
        id: '0003',
        name: 'John Travolta',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        level: 'Financial'
    },
    {
        id: '0004',
        name: 'Kim Kardashian',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        level: 'Manager Operational'
    },
    {
        id: '0005',
        name: 'Michael Jackson',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        level: 'Director'
    },
];

const getUserById = (id) => {
    return ( id === undefined ) ? items[0] : items.find(x => x.id === id);
};

const getUsers = () => {
    return items
};

export {
    items,
    getUsers,
    getUserById
};
