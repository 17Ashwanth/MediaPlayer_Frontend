import axios from "axios"

const commonAPI = async(httpMethod, url, reqBody)=>{
    let reqConfig = {
        method: httpMethod,
        url: url,
        data:reqBody,
        headers:{
          "Content-Type":"application/json",
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result
        }).catch((err)=>{
            return err
    })
}

export default commonAPI;