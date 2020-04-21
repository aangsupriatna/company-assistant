export default {
    async get({ commit }) {        
        let {data} = await this.$axios.get('http://localhost:3000/api/experts')
        console.log(data)
        await commit('set', data)
    },
    getExpert: async({commit, store}, id) => {
        let { data } = await axios.get(`experts/${id}`)
        await commit('add', data)
    },
}
