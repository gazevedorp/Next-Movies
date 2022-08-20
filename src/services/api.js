import axios from 'axios'

import enviroment from '../enviroments'

const api = axios.create({
    baseURL: enviroment.API_URL,
    timeout: 5000,
})

export default api