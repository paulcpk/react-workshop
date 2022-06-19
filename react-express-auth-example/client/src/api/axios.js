import axios from 'axios'

export default axios.create({
  baseURL: '/api',
})

export const getRequestHandler = async (route) => {
  try {
    const response = await axios.get(route, {
      withCredentials: true,
    })

    return response.data
  } catch (err) {
    console.log('err', err)
  }
}
