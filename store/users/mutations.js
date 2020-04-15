export default {
    SET_USER: (state, user) => {
        state.users.push({user})
    },
    REMOVE_USER: (state, {user}) => {
        state.users.splice(state.users.indexOf(user), 1)
    },
}
