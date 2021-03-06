import Axios from 'axios'



export const ip = 'http://192.168.1.101:8000'
export const localhost = '192.168.1.101'
 
export const getProductApi = (page)=>{
    return Axios.get(`${ip}/product?page=${page}&limit=10`)
}
export const loadMoreApi = (pageInfo)=>{
    return Axios.get(`${ip}/${pageInfo}`)
}


export const searchMenuApi = (menu, price)=>{
    return Axios.get(`${ip}/product?search=${menu}&sort_by=${price}`)
}

export const loginApi = (data)=>{
    return Axios.post(`${ip}/login`, data)
}

export const registerApi = (data)=>{
    return Axios.post(`${ip}/register`, data)
}

export const addProduct = (data)=>{
    return Axios.post(`${ip}/product`, data)
}

export const deleteProductApi = (id)=>{
    return Axios.delete(`${ip}/product/${id}`)
}

export const getUserIdApi = (id)=>{
    return Axios.delete(`${ip}/user/${id}`)
}

