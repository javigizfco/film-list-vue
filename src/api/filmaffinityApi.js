import axios from 'axios'


const apiKey = 'fecc7f15d8msh88c3aee27852cd1p1f9f94jsne5cc03a1b765'
const apiHost = 'filmaffinity-unofficial.p.rapidapi.com'

const filmAffinityApi = axios.create({
  baseURL: 'https://filmaffinity-unofficial.p.rapidapi.com/',
  params: {
    'X-RapidAPI-Host': apiHost,
    'X-RapidAPI-Key': apiKey
  }
})


export default filmAffinityApi