import API from '@/api'

export default {
    getExperts: async({ commit }) => {
        let data = API.getTenagaAhli()
        await commit('setExperts', data)
    },
    getExpert: async({commit, store}, id) => {
        let { data } = await axios.get(`experts/${id}`)
        await commit('setExpert', data)
    },
}
