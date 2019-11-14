import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppContainer } from './App.style';

import Header from './components/header/header.component';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInPage from './pages/signin-page/signin-page.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';

import { auth, createUserProfileDocument, getRemoteCatalog } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';
import { selectCartItemsCount } from './redux/cart/cart.selectors';

import { setCatalog } from './redux/catalog/catalog.actions';

class App extends React.Component {
  unsubscribeFromAuth = null
  unsubscribeFromCatalog = null

  componentDidMount() {
    const { setCurrentUser, setCatalog } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });


    this.unsubscribeFromCatalog = getRemoteCatalog()
      .then(snapShot => setCatalog(snapShot));
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromCatalog();
  }

  signInRender = () => {
    if (this.props.currentUser) {
      return (<Redirect to='/' />);
    }
    return (<SignInPage />);
  }

  checkoutRender = () => {
    if (this.props.cartItemsCount) {
      return (<CheckoutPage />);
    }
    return (<Redirect to='/shop' />);
  }

  render() {
    return (
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route exact path='/checkout' render={ this.checkoutRender } />
          <Route exact path='/sign-in' render={ this.signInRender } />
        </Switch>
      </AppContainer>
    );
  }

  static mapDispatchToProps(dispatch) {
    return {
      setCurrentUser: user => dispatch(setCurrentUser(user)),
      setCatalog: catalog => dispatch(setCatalog(catalog))
    };
  }

  static mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartItemsCount: selectCartItemsCount
  });
}

export default connect(
  App.mapStateToProps,
  App.mapDispatchToProps
)(App);
