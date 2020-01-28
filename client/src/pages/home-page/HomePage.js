import PropTypes from 'prop-types';
import React from 'react';
import Main from '../../components/main/Main';
import './HomePage.scss';

const HomePage = ({ categories }) => {
  return (
    <div className="homepage">
      <Main categories={categories} />
    </div>
  );
};

HomePage.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default HomePage;
