import {getProductApi, searchMenuApi, addProduct, deleteProductApi, loadMoreApi} from '../../utils/http'
// import Axios from 'axios'
import {getAllproduct, searchMenu, addNewProduct, deleteProduct, loadMore} from './actionType'

export const fetchProduct = (page)=>{
    return {
        type:getAllproduct,
        payload:getProductApi(page)
        }
    
}
export const loadMoreCreator = (pageInfo)=>{
    return {
        type:loadMore,
        payload:loadMoreApi(pageInfo)
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