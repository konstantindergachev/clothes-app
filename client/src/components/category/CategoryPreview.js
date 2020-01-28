import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { getRoute } from '../../helpers/getRoute';
import CategoryItem from './category-item/CategoryItem';
import './CategoryPreview.scss';

const CATEGORY_COUNT_OF_PREVIEW = 4;

const CategoryPreview = ({ title, items, routeName }) => {
  return (
    <div className="category-preview">
      <Link to={getRoute(routeName)}>
        <h1 className="title">{title}</h1>
      </Link>
      <div className="preview">
        {items &&
          items
            .filter((item, idx) => idx < CATEGORY_COUNT_OF_PREVIEW)
            .map((item) => <CategoryItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  routeName: PropTypes.string.isRequired,
};

export default CategoryPreview;
