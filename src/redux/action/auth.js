import {login, register, form} from './actionType'

import {loginApi, registerApi} from '../../utils/http'


export const loginAction = (data) => {
    return{
        type:login,
        payload: loginApi(data)
    };

}

export const registerAction = (data) => {
    return{
        type:register,
        payload: registerApi(data)
    };

}


