export default {
    getExperts: (state) => {
        return state.expert_list
    },
    getExpertById: (state) => (id) => {
        return state.expert_list.find(expert => { return expert.id === id })
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