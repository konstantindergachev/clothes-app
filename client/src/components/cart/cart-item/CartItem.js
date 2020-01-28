import PropTypes from 'prop-types';
import React, { memo } from 'react';
import './CartItem.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
};

export default memo(CartItem);
