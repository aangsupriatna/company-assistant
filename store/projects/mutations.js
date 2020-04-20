export default {
    setProjects: (state, projects) => {
        state.project_list = projects
    },
    setProject: (state, { project }) => {
        state.project = project
    },
    toggleDialog: (state) => {
        state.dialog = !state.dialog
    },
}
