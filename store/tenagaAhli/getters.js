export default {
    getTenagaAhli: (state) => {
        return state.tenagaAhli
    },
    getTenagaAhliById: (state) => (id) => {
        return state.tenagaAhli.find(ta => { return ta.id === id })
    },
    getHeader: (state) => {
        return state.header
    }
}
