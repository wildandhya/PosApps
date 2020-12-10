import {
    getAllproduct,
    pending,
    fulfilled,
    rejected,
    searchMenu,
    goHome,
    loadMore,
    addNewProduct,
    deleteProduct
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
          data: payload.data,
          isPending: false,
        };
        case loadMore + pending:
          return {
            ...prevState,
            isPending: true,
          };
    
        case loadMore + rejected:
          return {
            ...prevState,
            isRejected: true,
            error: payload,
            isPending: false,
          };
        case loadMore + fulfilled:
          return {
            ...prevState,
            isFulfilled: true,
            data: payload.data,
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
        case addNewProduct + pending:
          return {
            ...prevState,
            isPending: true,
          };
    
        case addNewProduct + rejected:
          return {
            ...prevState,
            isRejected: true,
            error: payload,
            isPending: false,
          };
        case addNewProduct + fulfilled:
          return {
            ...prevState,
            isFulfilled: true,
            data: payload.data.data,
            isPending: false,
          };
          case deleteProduct + pending:
            return {
              ...prevState,
              isPending: true,
            };
      
          case deleteProduct + rejected:
            return {
              ...prevState,
              isRejected: true,
              error: payload,
              isPending: false,
            };
          case deleteProduct + fulfilled:
            const deleteData = prevState.data.filter(item =>{
              return item.id !== payload.data.data.id
            })
            console.log(payload.data.data.id)
            return {
              ...prevState,
              isFulfilled: true,
              data: deleteData,
              isPending: false,
             
            };
      default:
        return prevState;
    }
  };
  
  export default productReducer;