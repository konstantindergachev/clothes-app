import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartDropdown from '../../components/cart/cart-dropdown/CartDropdown';
import CartIcon from '../../components/cart/cart-icon/CartIcon';
import { ReactComponent as Logo } from '../../images/bathrobe.svg';
import { toggleCartHidden } from '../../redux/actions/cartActions';
import { logoutUser } from '../../redux/actions/userActions';
import './Header.scss';

const Header = ({
  hidden,
  user,
  itemCount,
  toggleCartHidden,
  cartItems,
  logoutUser,
}) => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <nav className="options">
        <Link to="/shop" className="option">
          магазин
        </Link>
        <Link to="/contact" className="option">
          контакты
        </Link>
        {user ? (
          <Fragment>
            <Link to="/" className="option" onClick={logoutUser}>
              выход
            </Link>
            <div className="option option__name">{user.displayName}</div>
            <CartIcon
              itemCount={itemCount}
              toggleCartHidden={toggleCartHidden}
            />
          </Fragment>
        ) : (
          <Link to="/auth" className="option">
            вход
          </Link>
        )}
      </nav>
      {!hidden && (
        <CartDropdown
          cartItems={cartItems}
          toggleCartHidden={toggleCartHidden}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  hidden: PropTypes.bool.isRequired,
  itemCount: PropTypes.number.isRequired,
  cartItems: PropTypes.array.isRequired,
  toggleCartHidden: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  hidden: state.cart.hidden,
  itemCount: state.cart.itemCount,
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps, { toggleCartHidden, logoutUser })(
  Header
);
