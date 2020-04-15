const items = [
    { header: 'Today' },
    {
        icon: 'mdi-account',
        iconClass: 'blue white--text',
        title: 'New user registered',
        name: 'Jason Oner',
        iconInfo: 'mdi-information'

    },
    {
        icon: 'mdi-post',
        iconClass: 'red white--text',
        title: 'Post successfully removed',
        name: 'Travis Howard',
        iconInfo: 'mdi-close-circle'
    },
    { header: '10 Years Ago' },
    {
        icon: 'mdi-cart',
        iconClass: 'indigo white--text',
        title: 'New order received',
        name: 'Ali Connors',
        iconInfo: 'mdi-alert-circle'
    },
    {
        icon: 'mdi-email',
        iconClass: 'blue white--text',
        title: 'New message',
        name: 'Cindy Baker',
        iconInfo: 'mdi-information'
    },
    {
        icon: 'mdi-briefcase-plus',
        iconClass: 'red white--text',
        title: 'New project added',
        name: 'Adam Lavigne',
        iconInfo: 'mdi-information'
    },
];

const getToolbarNotification = () => {
    return items
};

export {
    getToolbarNotification
};
