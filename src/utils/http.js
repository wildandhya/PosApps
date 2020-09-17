import Axios from 'axios'
import { search } from '../assets'

export const getProductApi = ()=>{
    return Axios.get('http://192.168.1.102:8000/product')
}
export const searchMenuApi = (menu, price)=>{
    return Axios.get(`http://192.168.1.102:8000/product?search=${menu}&sort_by=${price}`)
}

export const loginApi = (data)=>{
    return Axios.post(`http://192.168.1.102:8000/login`, data)
}

export const registerApi = (data)=>{
    return Axios.post(`http://192.168.1.102:8000/register`, data)
}


