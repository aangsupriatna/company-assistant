export default {
    tambahTenagaAhli: async ({ commit }, ta) => {
        await commit('TAMBAH_TENAGA_AHLI', ta)
    },
    hapusTenagaAhli: async ({ commit }, ta) => {
        await commit('HAPUS_TENAGA_AHLI', ta)
    },
}
