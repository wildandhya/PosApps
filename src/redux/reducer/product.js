import {
    getAllproduct,
    pending,
    fulfilled,
    rejected,
    searchMenu
  } from "../action/actionType";
  
  const initialState = {
    data: [],
    error: "",
    isPending: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const productReducer = (prevState = initialState, { type, payload }) => {
    switch (type) {
      case getAllproduct + pending:
        return {
          ...prevState,
          isPending: true,
        };
  
      case getAllproduct + rejected:
        return {
          ...prevState,
          isRejected: true,
          error: payload,
          isPending: false,
        };
      case getAllproduct + fulfilled:
        return {
          ...prevState,
          isFulfilled: true,
          data: payload.data.data,
          isPending: false,
        };
        case searchMenu + pending:
        return {
          ...prevState,
          isPending: true,
        };
  
      case searchMenu + rejected:
        return {
          ...prevState,
          isRejected: true,
          error: payload,
          isPending: false,
        };
      case searchMenu + fulfilled:
        return {
          ...prevState,
          isFulfilled: true,
          data: payload.data.data,
          isPending: false,
        };
      default:
        return prevState;
    }
  };
  
  export default productReducer;