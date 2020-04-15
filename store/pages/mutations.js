export default {
    ADD_TITLE: (state, title) => {
        state.title = title
    },
    ADD_ICON: (state, icon) => {
        state.icon = icon
    }
}

// fetch({store}) {
//     store.dispatch('pages/title', 'Pengalaman Perusahaan');
//     store.dispatch('pages/icon', 'mdi-view-list');
// },
