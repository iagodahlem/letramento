import axios from 'axios'

// const BASE_URL = 'http://localhost:3001/api'
const BASE_URL = 'https://letramento-api.herokuapp.com/api'

const get = (url) => axios
  .get(`${BASE_URL}${url}`)

const post = (url, data) => axios
  .post(`${BASE_URL}${url}`, data)

export default {
  get,
  post,
}

export {
  get,
  post,
}
