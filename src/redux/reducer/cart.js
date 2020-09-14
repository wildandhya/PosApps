import { addToCart, deleteMenuAdded, increase, decrease } from "../action/actionType"

const initialState={
    data :[],
}

const cartReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case addToCart:
            return{ 
                ...state,
                data: [...state.data, payload]
            }
        case deleteMenuAdded:
            return{
                ...state,
                data: state.data
            }
        case increase:
            let cartData = [...state.data];
            cartData[payload] = {
                ...cartData[payload],
                qty: state.data[payload].qty + 1,
            };
            return {
                ...state,
                data: cartData,
            };
        case decrease:
            if (state.data[payload].qty > 1) {
                let cartData = [...state.data];
                cartData[payload] = {
                  ...cartData[payload],
                  qty: state.data[payload].qty - 1,
                };
                return {
                  ...state,
                  data: cartData,
                };
              } else {
                return {
                  ...state,
                };
              }
        default:
            return state
    }
}


export default cartReducer