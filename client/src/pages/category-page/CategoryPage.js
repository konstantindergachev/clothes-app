import PropTypes from 'prop-types';
import React from 'react';
import CategoryItem from '../../components/category/category-item/CategoryItem';
import './CategoryPage.scss';

const CategoryPage = ({ match: { params }, shop }) => {
  return (
    <div className="category-page">
      <h2 className="title">{shop[params.category].title}</h2>
      <div className="items">
        {shop[params.category].items.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

CategoryPage.propTypes = {
  params: PropTypes.object,
  shop: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
};

export default CategoryPage;
