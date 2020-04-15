import API from '@/api';

export default () => ({
    users: API.getUsers()
})
