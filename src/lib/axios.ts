import axios from 'axios'

const BASE_URL = 'https://api.github.com'

export default {
  getIssues: async () => {
    const response = await axios.get(`${BASE_URL}/issues`)
    return response.data
  },
}
