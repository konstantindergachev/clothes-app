import { TYPES } from '../shop-types';
const initialState = {
  shop: [],
  isLoading: false,
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.SHOP_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.GET_SHOP:
      return {
        ...state,
        shop: action.payload.shopData,
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
