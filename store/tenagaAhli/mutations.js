export default {
    TAMBAH_TENAGA_AHLI: (state, ta) => {
        state.tenagaAhli.push({ta})
    },
    HAPUS_TENAGA_AHLI: (state, ta) => {
        state.tenagaAhli.splice(state.tenagaAhli.indexOf(ta), 1)
    }
}
