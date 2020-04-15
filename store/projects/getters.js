export default {
    getProjects: (state) => {
        return state.projects;
    },
    getProjectById: (state) => (id) => {
        return state.projects.find(project => {return project.id === id});
    },
    getHeader: (state) => {
        return state.header;
    },
    getDialog: (state) => {
        return state.dialog;
    }
}
