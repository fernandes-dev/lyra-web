import axios from 'axios'

const lyraApi = axios

lyraApi.defaults.baseURL = process.env.NEXT_PUBLIC_LYRA_API_URL

export { lyraApi }