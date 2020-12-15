import {
    login,
    register,
    pending,
    fulfilled,
    rejected,
    logout
  } from "../action/actionType";
  
  const initialState = {
    user: [],
    error: [],
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
        if(payload.data.error){
          return {
            ...prevState,
            isFulfilled: true,
            user: payload.data.data,
            isPending: false,
            isLogged:false,
            isAdmin:false
           
          };
        }else{
          let admin = null
          let login = null
          if(payload.data.data.level === 2){
            admin=true
            login=true
          }else{
            admin=false
            login=true
          }
          return {
            ...prevState,
            isFulfilled: true,
            user: payload.data.data,
            isPending: false,
            isLogged:login,
            isAdmin:admin
           
          };
        }
        
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
            case logout:

              return {
                ...prevState,
                isFulfilled: true,
                user: [],
                isPending: false,
              };
      default:
        return prevState;
    }
  };
  
  export default authReducer;