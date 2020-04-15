import API from '@/api'

export default () => ({
    tenagaAhli: API.getTenagaAhli(),
    header: API.getTaHeader(),
})
