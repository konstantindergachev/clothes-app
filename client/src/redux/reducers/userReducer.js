import { isEmpty } from '../../validation/is-empty';
import { TYPES } from '../auth-types';

const initialState = {
  user: null,
  isLoading: false,
  isAuth: false,
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: !isEmpty(action.payload),
        isLoading: false,
      };
    case TYPES.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case TYPES.REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case TYPES.LOGOUT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case TYPES.USER_ERRORS:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
