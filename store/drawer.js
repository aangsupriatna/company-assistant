export const state = () => ({
    drawer: true
});

export const mutations = {
    toggle(state) {
        state.drawer = !state.drawer
    }
};

export const getters = {
    getDrawerState(state) {
        return state.drawer
    }
};

export const actions = {
    toggle({ commit }) {
        commit('toggle')
    }
};
