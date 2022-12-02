import axios from 'axios'

const BASE_URL = 'https://api.github.com'

export default {
  getIssues: async () => {
    const response = await axios.get(
      `${BASE_URL}/repos/matheusdamata/react-git-blog/issues`,
    )
    return response.data
  },
  getIssue: async (number: number) => {
    const response = await axios.get(
      `${BASE_URL}/repos/matheusdamata/react-git-blog/issues/${number}`,
    )
    return response.data
  },
  getSearchIssue: async (name: string, query: string) => {
    const response = await axios.get(
      `${BASE_URL}/search/issues?q=${query}%20repo:${name}/react-git-blog`,
      {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      },
    )

    return response.data
  },
  getUserInfo: async (name: string) => {
    const response = await axios.get(`${BASE_URL}/users/${name}`)
    return response.data
  },
}
