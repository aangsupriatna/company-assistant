export default {
    getUsers: (state) => {
        return state.users;
    },
    getUserById: (state) => (id) => {
        return state.users.find(user => { return user.id === id })
    }
}

/*
computed: {
    ...mapGetters({
        test: "users/getUserById"
    }),
    thing() {
        return this.test('0002');
    },
}
*/
