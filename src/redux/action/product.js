import {getProductApi, searchMenuApi} from '../../utils/http'
// import Axios from 'axios'
import {getAllproduct, searchMenu} from './actionType'

export const fetchProduct = ()=>{
    return {
        type:getAllproduct,
        payload:getProductApi()
        }
    
}

export const searchMenuCreator = (menu)=>{
    return {
        type:searchMenu,
        payload:searchMenuApi(menu)
        }
    
}