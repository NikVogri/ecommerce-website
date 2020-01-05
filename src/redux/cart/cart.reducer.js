import { CartActionTypes } from './cartActionTypes';
import { addItemToCart } from './cart.utils';
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, actions.payload)
      }
    default:
      return state;
  }
}

export default cartReducer;