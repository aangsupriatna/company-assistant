export default {
    title: async ({ commit }, title) => {
        await commit('ADD_TITLE', title)
    },
    icon: async ({commit}, icon) => {
        await commit('ADD_ICON', icon)
    }
}
