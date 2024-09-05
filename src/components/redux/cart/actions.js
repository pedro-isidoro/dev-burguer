import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    //o payload será o produto
    payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  //o payload será o ID
  payload,
});

export const increaseProductQuantity = (payload) => ({
  type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
  //o payload será o ID
  payload,
});

export const decreaseProductQuantity = (payload) => ({
  type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
  //o payload será o ID
  payload,
});