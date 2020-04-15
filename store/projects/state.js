import API from '@/api';

export default () => ({
    projects: API.getProjects(),
    header: API.getProjectsHeader(),
    dialog: null
})
