export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    const updCartItems = cartItems.map(
      (cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
    );
    return updCartItems;
  }
  return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};

export const calcItemCount = (cartItems, cartItemToAdd) => {
  const updCartItems = addItemToCart(cartItems, cartItemToAdd);
  const itemCount = updCartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  return itemCount;
};

export const calcCartTotalPrice = (cartItems, cartItemToAdd) => {
  const updCartItems = addItemToCart(cartItems, cartItemToAdd);
  const cartTotal = updCartItems.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  return cartTotal;
};
