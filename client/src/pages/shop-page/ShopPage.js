import PropTypes from 'prop-types';
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import './ShopPage.scss';
const CategoryOverview = lazy(() =>
  import('../../components/category/CategoryOverview')
);

const ShopPage = ({ match, shop }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={() => <CategoryOverview shop={shop} />}
      />
    </div>
  );
};

ShopPage.propTypes = {
  match: PropTypes.object.isRequired,
  shop: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
};

export default ShopPage;
