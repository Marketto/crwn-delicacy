import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInPage from './pages/signinpage/signinpage.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  signInRender = () => {
    if (this.props.currentUser) {
      return (<Redirect to='/' />);
    }
    return (<SignInPage />)
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' render={ this.signInRender }/>
        </Switch>
      </div>
    );
  }

  static mapDispatchToProps(dispatch) {
    return {
      setCurrentUser: user => dispatch(setCurrentUser(user))
    };
  }

  static mapStateToProps = createStructuredSelector({
      currentUser: selectCurrentUser
    });
}

export default connect(
  App.mapStateToProps,
  App.mapDispatchToProps
)(App);
