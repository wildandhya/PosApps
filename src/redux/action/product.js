import {getProductApi, searchMenuApi} from '../../utils/http'
// import Axios from 'axios'
import {getAllproduct, searchMenu, goHome} from './actionType'

export const fetchProduct = ()=>{
    return {
        type:getAllproduct,
        payload:getProductApi()
        }
    
}

export const searchMenuCreator = (menu, price)=>{
    return {
        type:searchMenu,
        payload:searchMenuApi(menu, price)
        }
    
}

export const goToHome = (menu)=>{
    return {
        type:goHome,
        }
    
}