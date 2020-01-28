import {
  addItemToCart,
  calcCartTotalPrice,
  calcItemCount,
} from '../../helpers/addItemToCart';
import {
  calcCartTotalPriceFromRemove,
  calcCartTotalPriceFromRemoveOneItem,
  calcItemCountFromRemove,
  calcItemCountFromRemoveOneItem,
  removeItemFromCart,
  removeOneItemFromCart,
} from '../../helpers/removeItemFromCart';
import { TYPES } from '../cart-types';

const initialState = {
  hidden: true,
  cartItems: [],
  isLoading: false,
  itemCount: 0,
  cartTotal: 0,
  info: '',
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.CART_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case TYPES.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        itemCount: calcItemCount(state.cartItems, action.payload),
        cartTotal: calcCartTotalPrice(state.cartItems, action.payload),
        isLoading: false,
      };
    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        itemCount: calcItemCountFromRemove(state.cartItems, action.payload),
        cartTotal: calcCartTotalPriceFromRemove(
          state.cartItems,
          action.payload
        ),
        isLoading: false,
      };
    case TYPES.REMOVE_FROM_CART_ONE_ITEM:
      return {
        ...state,
        cartItems: removeOneItemFromCart(state.cartItems, action.payload),
        itemCount: calcItemCountFromRemoveOneItem(
          state.cartItems,
          action.payload
        ),
        cartTotal: calcCartTotalPriceFromRemoveOneItem(
          state.cartItems,
          action.payload
        ),
        isLoading: false,
      };
    case TYPES.TO_PAY:
      return {
        ...state,
        info: action.payload,
        isLoading: false,
      };
    case TYPES.ERRORS:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
