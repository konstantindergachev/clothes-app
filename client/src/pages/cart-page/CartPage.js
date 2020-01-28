import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CartPageItem from '../../components/cart/cart-page-item/CartPageItem';
import Stripe from '../../components/ui/stripe/Stripe';
import {
  addToCart,
  removeFromCart,
  removeFromCartOneItem,
  toPay,
} from '../../redux/actions/cartActions';
import './CartPage.scss';

const CartPage = ({
  cartItems,
  cartTotal,
  addToCart,
  removeFromCart,
  removeFromCartOneItem,
  toPay,
  info,
}) => {
  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="header-block">
          <span>Название</span>
        </div>
        <div className="header-block">
          <span>Описание</span>
        </div>
        <div className="header-block">
          <span>Количество</span>
        </div>
        <div className="header-block">
          <span>Цена</span>
        </div>
        <div className="header-block">
          <span>Удалить</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CartPageItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          removeFromCartOneItem={removeFromCartOneItem}
        />
      ))}
      <div className="total">
        <span>Всего: ${cartTotal}</span>
      </div>

      <div className="test-warning">
        * Пожалуйста используйте следующую тестовую кредитную карту для оплаты
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <Stripe total={cartTotal} toPay={toPay} info={info} />
    </div>
  );
};

CartPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  cartTotal: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  removeFromCartOneItem: PropTypes.func.isRequired,
  toPay: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  cartTotal: state.cart.cartTotal,
  info: state.cart.info,
});
export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  removeFromCartOneItem,
  toPay,
})(CartPage);
