import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/actions/cartActions';
import Button from '../../ui/button/Button';
import './CategoryItem.scss';

const CategoryItem = ({ item, addToCart, isAuth }) => {
  return (
    <div className="category-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className="category-footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      {isAuth ? (
        <Button
          classname="inverted"
          value="В корзину"
          func={() => addToCart(item)}
        />
      ) : (
        <Link to="/auth" className="inverted btn">
          войти чтобы купить
        </Link>
      )}
    </div>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { addToCart })(CategoryItem);
