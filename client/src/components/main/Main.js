import PropTypes from 'prop-types';
import React from 'react';
import Categories from '../categories/Categories';
import './Main.scss';

const Main = ({ categories }) => {
  return (
    <div className="directory-menu">
      {categories.map((category) => (
        <Categories key={category.id} {...category} />
      ))}
    </div>
  );
};

Main.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Main;
