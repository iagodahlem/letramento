import apiService from './apiService'

const fetchTexts = () => apiService
  .get('/texts')
  .then(response => response.data)

const showText = (id) => apiService
  .get(`/texts/${id}`)
  .then(response => response.data)

export default {
  fetchTexts,
  showText,
}

export {
  fetchTexts,
  showText,
}
