import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as Bag } from '../../../images/bag.svg';
import './CartIcon.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <Bag className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
  toggleCartHidden: PropTypes.func.isRequired,
};

export default CartIcon;
