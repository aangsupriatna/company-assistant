export default {
    toggleDialog: async ({ commit }) => {
        await commit('TOGGLE_DIALOG')
    },
    setProject: async ({ commit }, project) => {
        await commit('TAMBAH_PROJECT', project)
    },
    removeProject: async ({ commit }, project) => {
        await commit('HAPUS_PROJECT', project)
    }
}
