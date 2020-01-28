export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((item) => item.id !== cartItemToRemove.id);
};

export const calcCartTotalPriceFromRemove = (cartItems, cartItemToRemove) => {
  const updCartItems = removeItemFromCart(cartItems, cartItemToRemove);
  return updCartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
};

export const calcItemCountFromRemove = (cartItems, cartItemToRemove) => {
  const updCartItems = removeItemFromCart(cartItems, cartItemToRemove);
  return updCartItems.reduce((acc, cur) => acc + cur.quantity, 0);
};

export const removeOneItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }
  const updCartItems = cartItems.map(
    (item) =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
  );
  return updCartItems;
};

export const calcCartTotalPriceFromRemoveOneItem = (
  cartItems,
  cartItemToRemove
) => {
  const updCartItems = removeOneItemFromCart(cartItems, cartItemToRemove);
  return updCartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
};

export const calcItemCountFromRemoveOneItem = (cartItems, cartItemToRemove) => {
  const updCartItems = removeOneItemFromCart(cartItems, cartItemToRemove);
  return updCartItems.reduce((acc, cur) => acc + cur.quantity, 0);
};
