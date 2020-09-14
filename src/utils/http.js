import Axios from 'axios'
import { search } from '../assets'

export const getProductApi = ()=>{
    return Axios.get('http://192.168.1.101:8000/product')
}
export const searchMenuApi = (menu)=>{
    return Axios.get(`http://192.168.1.101:8000/search?menu=${menu}`)
}


