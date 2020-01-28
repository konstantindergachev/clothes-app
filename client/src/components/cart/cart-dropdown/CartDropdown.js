import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../cart-item/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Ваша корзина пуста</span>
        )}
      </div>
      <Link to="/cart" className="btn" onClick={toggleCartHidden}>
        Перейти в корзину
      </Link>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
  toggleCartHidden: PropTypes.func.isRequired,
};

export default CartDropdown;
