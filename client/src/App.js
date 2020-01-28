import PropTypes from 'prop-types';
import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Spinner from './components/ui/spinner/Spinner';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import HomePage from './pages/home-page/HomePage';
import { getDataFromShop } from './redux/actions/shopActions';
import { reloadUser, setUser } from './redux/actions/userActions';

const ShopPage = lazy(() => import('./pages/shop-page/ShopPage'));
const ContactPage = lazy(() => import('./pages/contact-page/ContactPage'));
const CartPage = lazy(() => import('./pages/cart-page/CartPage'));
const AuthPage = lazy(() => import('./pages/auth-page/AuthPage'));
const CategoryPage = lazy(() => import('./pages/category-page/CategoryPage'));

class App extends Component {
  componentDidMount() {
    const { reloadUser } = this.props;
    reloadUser();
    const { getDataFromShop } = this.props;
    getDataFromShop();
  }

  render() {
    const { user, categories, shop } = this.props;
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route
                exact
                path="/"
                render={() => <HomePage categories={categories} />}
              />
              <Route
                exact
                path="/shop"
                render={(props) => <ShopPage {...props} shop={shop} />}
              />
              <Route
                exact
                path="/shop/:category"
                render={(props) => <CategoryPage {...props} shop={shop} />}
              />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/cart" component={CartPage} />

              {user ? (
                <Redirect to="/" />
              ) : (
                <Route exact path="/auth" component={AuthPage} />
              )}
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  categories: PropTypes.array.isRequired,
  shop: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
  setUser: PropTypes.func.isRequired,
  getDataFromShop: PropTypes.func.isRequired,
  reloadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  categories: state.categories.categories,
  shop: state.shop.shop,
});

export default connect(mapStateToProps, {
  setUser,
  getDataFromShop,
  reloadUser,
})(App);
