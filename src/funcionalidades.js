import axios from "axios"

 const getCinemas =  async ()=>{
    const urlAPI  = await axios.get(`${'http://elcasu.com'}/cinemas`)
    
    console.log(urlAPI.data.cinemas)
    return urlAPI.data.cinemas
}


export{
     getCinemas,
}

