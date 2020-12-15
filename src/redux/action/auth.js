import {login, register, logout} from './actionType'

import {loginApi, registerApi} from '../../utils/http'


export const loginAction = (data) => {
    return{
        type:login,
        payload: new Promise((resolve, reject)=>{
            loginApi(data).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                resolve(err.response)
            })
        })
    };

}

export const registerAction = (data) => {
    return{
        type:register,
        payload: registerApi(data)
    };

}

export const lagoutAction = (data) => {
    return{
        type:logout,
        
    };

}


