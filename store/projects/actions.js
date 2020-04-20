import API from '@/api'

export default {
    toggleDialog: async ({ commit }) => {
        await commit('toggleDialog')
    },
    setProjects: async ({ commit }, project) => {
        let data = API.getProjects()
        await commit('setProjects', data)
    },
    setProject: async ({ commit }, project) => {
        let { data } = await axios.get(`projects/${id}`)
        await commit('setProject', data)
    },
    removeProject: async ({ commit }, project) => {
        await commit('HAPUS_PROJECT', project)
    }
}
