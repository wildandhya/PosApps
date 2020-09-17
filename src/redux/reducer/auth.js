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
    isLogged:false
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
        return {
          ...prevState,
          isFulfilled: true,
          user: payload.data.data,
          isPending: false,
          isLogged:true
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