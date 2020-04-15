export default {
    TAMBAH_PROJECT: (state, project) => {
        state.projects.push({ project })
    },
    HAPUS_PROJECT: (state, { project }) => {
        state.projects.splice(state.projects.indexOf(project), 1)
    },
    TOGGLE_DIALOG: (state) => {
        state.dialog = !state.dialog
    },
}
