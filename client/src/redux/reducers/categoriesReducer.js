import { CATEGORIES_DATA } from '../../stubs/categories.data';
import { TYPES } from '../categories-types';
const initialState = {
  categories: CATEGORIES_DATA,
  isLoading: false,
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
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
