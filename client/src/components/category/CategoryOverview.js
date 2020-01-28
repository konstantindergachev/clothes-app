import PropTypes from 'prop-types';
import React from 'react';
import './CategoryOverview.scss';
import CategoryPreview from './CategoryPreview';

const CategoryOverview = ({ shop }) => {
  return (
    <div className="category-overview">
      {Object.values(shop).map((category) => (
        <CategoryPreview
          key={category.id}
          title={category.title}
          items={category.items}
          routeName={category.routeName}
        />
      ))}
    </div>
  );
};

CategoryOverview.propTypes = {
  shop: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
};

export default CategoryOverview;
