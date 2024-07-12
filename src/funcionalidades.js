import axios from 'axios'

console.log('API URL --->', process.env.REACT_APP_API_URL)
const apiUrl = process.env.REACT_APP_API_URL

const getCinemas =  async ()=>{
  const urlAPI  = await axios.get(`${apiUrl}/cinemas`)
    
  console.log(urlAPI.data.cinemas)
  return urlAPI.data.cinemas
}

export {
  getCinemas,
}

