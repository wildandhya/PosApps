import Axios from 'axios'
import { search } from '../assets'

export const ip = 'http://192.168.1.100:8000'

export const getProductApi = ()=>{
    return Axios.get(`${ip}/product`)
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
    return Axios.delete(`${ip}/product:${id}`)
}

