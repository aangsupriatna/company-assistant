export default {
    getExperts: (state) => {
        return state.list
    },
    getExpertById: (state) => (id) => {
        return state.list.find(expert => { return expert.id === id })
    },
}

// computed: {
//     experts() {
//         return this.$store.state.experts.expert_list;
//     },
//         ...mapGetters({
//         headers: "tenagaAhli/getHeader",
//         items: "experts/getExperts"
//     })
// },