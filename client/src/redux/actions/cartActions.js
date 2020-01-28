import { TYPES } from '../cart-types';

export const cartLoading = () => {
  return {
    type: TYPES.CART_LOADING,
  };
};
export const toggleCartHidden = () => (dispatch) => {
  try {
    dispatch({
      type: TYPES.TOGGLE_CART_HIDDEN,
    });
  } catch (err) {
    dispatch({
      type: TYPES.ERRORS,
      payload: err,
    });
  }
};
export const addToCart = (item) => (dispatch) => {
  try {
    cartLoading();
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: item,
    });
  } catch (err) {
    dispatch({
      type: TYPES.ERRORS,
      payload: err,
    });
  }
};
export const removeFromCart = (item) => (dispatch) => {
  try {
    cartLoading();
    dispatch({
      type: TYPES.REMOVE_FROM_CART,
      payload: item,
    });
  } catch (err) {
    dispatch({
      type: TYPES.ERRORS,
      payload: err,
    });
  }
};
export const removeFromCartOneItem = (item) => (dispatch) => {
  try {
    cartLoading();
    dispatch({
      type: TYPES.REMOVE_FROM_CART_ONE_ITEM,
      payload: item,
    });
  } catch (err) {
    dispatch({
      type: TYPES.ERRORS,
      payload: err,
    });
  }
};
export const toPay = (payment) => async (dispatch) => {
  await fetch('/api/payment', {
    method: 'POST',
    body: JSON.stringify(payment),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  try {
    dispatch({
      type: TYPES.TO_PAY,
      payload: 'Оплата прошла успешно',
    });
  } catch (err) {
    console.log('err: ', JSON.parse(err));
    dispatch({
      type: TYPES.ERRORS,
      payload:
        'Произошла ошибка с вашей оплатой. Пожалуйста, убедитесь, что вы используете правильную карту',
    });
  }
};
