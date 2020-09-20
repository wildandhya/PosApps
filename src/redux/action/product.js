import {getProductApi, searchMenuApi, addProduct, deleteProductApi} from '../../utils/http'
// import Axios from 'axios'
import {getAllproduct, searchMenu, addNewProduct, deleteProduct} from './actionType'

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

export const deleteProductCreator = (id)=>{
    return {
        type:deleteProduct,
        payload:deleteProductApi(id)
        }
    
}