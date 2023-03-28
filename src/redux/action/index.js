// Cartlarga item qosiw
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// Cartdagi itemdi oshiriw
export const deleteCart = (product) => {
    return{
        type : "DELETEITEM",
        payload : product
    }
}