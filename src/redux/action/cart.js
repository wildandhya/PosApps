import {addToCart, deleteMenuAdded, increase, decrease} from './actionType'


export const addMenu = (data) => {
    return{
        type:addToCart,
        payload: data
    };

}


export const deleteMenu = (data)=>{
    return{
        type:deleteMenuAdded,
        payload:data
    }
}

export const plusBtn = (checkId)=>{
    return{
        type:increase,
        payload: checkId
        
    }
}

export const minusBtn = (checkId)=>{
    return{
        type:decrease,
        payload:checkId
        
    }
}
