import PropTypes from 'prop-types';
import React from 'react';
import './CartPageItem.scss';

const CartPageItem = ({
  item,
  addToCart,
  removeFromCart,
  removeFromCartOneItem,
}) => {
  return (
    <div className="cart__page-item">
      <div className="image-container">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeFromCartOneItem(item)}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={() => addToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${item.price}</span>
      <div className="remove-button" onClick={() => removeFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

CartPageItem.propTypes = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  removeFromCartOneItem: PropTypes.func.isRequired,
};

export default CartPageItem;
