import {getProductApi, searchMenuApi, addProduct} from '../../utils/http'
// import Axios from 'axios'
import {getAllproduct, searchMenu, addNewProduct} from './actionType'

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

export const addProductCreator = (data)=>{
    return {
        type:addNewProduct,
        payload:addProduct(data)
        }
    
}