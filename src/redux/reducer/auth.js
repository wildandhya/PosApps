import {
    login,
    register,
    pending,
    fulfilled,
    rejected,
  } from "../action/actionType";
  
  const initialState = {
    user: [],
    error: "",
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    isLogged:false,
    isAdmin:false
  };
  
  const authReducer = (prevState = initialState, { type, payload }) => {
    switch (type) {
      case login + pending:
        return {
          ...prevState,
          isPending: true,
          
        };
  
      case login + rejected:
        return {
          ...prevState,
          isRejected: true,
          error: payload,
          isPending: false,
          
        };
      case login + fulfilled:
        if(payload.data.success){
          let admin = null
          let login = null
          if(payload.data.data.level === 2){
            admin=true
            login=true
          }else{
            admin=false
            login=true
          }
        }else{
          admin=false
          login = false
          
        }
        return {
          ...prevState,
          isFulfilled: true,
          user: payload.data.data,
          isPending: false,
          isLogged:admin,
          isAdmin:login
        
        };
        
        case register + pending:
            return {
              ...prevState,
              isPending: true,
            };
      
          case register + rejected:
            return {
              ...prevState,
              isRejected: true,
              error: payload,
              isPending: false,
            };
          case register + fulfilled:

            return {
              ...prevState,
              isFulfilled: true,
              user: payload.data.data,
              isPending: false,
            };
      default:
        return prevState;
    }
  };
  
  export default authReducer;