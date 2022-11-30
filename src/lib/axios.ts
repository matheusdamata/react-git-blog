import axios from 'axios'

const BASE_URL = 'https://api.github.com'

export default {
  getIssues: async () => {
    const response = await axios.get(
      `${BASE_URL}/repos/matheusdamata/react-git-blog/issues`,
    )
    return response.data
  },
  getUserInfo: async (name: string) => {
    const response = await axios.get(`${BASE_URL}/users/${name}`)
    return response.data
  },
}
