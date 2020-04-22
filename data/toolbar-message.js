const items = [
    {
        user: 'Ali Connors',
        title: 'Brunch this weekend?',
        message: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        timeLabel: '15 min',
        avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      },
      {
        user: 'Scrott, Jennifer',
        title: 'Summer BBQ',
        message: "Wish I could come, but I'm out of town this weekend.",
        timeLabel: '2 hr',
        avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
      },
      {
        user: 'Sandra Adams',
        title: 'Oui oui',
        message: 'Do you have Paris recommendations? Have you ever been?',
        timeLabel: '6 hr',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      {
        user: 'Trevor Hansen',
        title: 'Birthday gift',
        message: 'Have any ideas about what we should get Heidi for her birthday?',
        timeLabel: '12 hr',
        avatar: 'https://randomuser.me/api/portraits/men/88.jpg',
      },
      {
        user: 'Britta Holt',
        title: 'Recipe to try',
        message: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        timeLabel: '18hr',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      }
]

const getToolbarMessageItems = () => {
    return items;
}

export {
    getToolbarMessageItems
}
