export default {
    getProjects: (state) => {
        return state.project_list;
    },
    getProjectById: (state) => (id) => {
        return state.project_list.find(project => {return project.id === id});
    },
    getDialog: (state) => {
        return state.dialog;
    }
}
