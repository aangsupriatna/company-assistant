export default {
    setUser: async ({ commit }, user) => {
        await commit('SET_USER', user)
    },
    removeUser: async({ commit }, user) => {
        await commit('REMOVE_USER', user)
    }
}
