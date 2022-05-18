import axios from 'axios'


const apiKey = '85eeb7b451d169020a0d8c8cac87fc75'

const movieDBApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: apiKey,
    language: 'es-ES'
  }
})


export default movieDBApi