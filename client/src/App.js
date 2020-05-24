import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home-page/home-page.component';
import Profile from './pages/profile/profile.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';
import ItemDetails from './pages/item-details/item-details.component';
import Discover from './pages/discover/discover.component';
import DiscoverItem from './pages/discover-item/discover-item.component';

import { getUserWatchedStartAsync } from './redux/user/user.actions';

// import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  render() {
    const { currentUser, getUserWatchedStartAsync } = this.props;

    if (currentUser) {
      getUserWatchedStartAsync(currentUser.email);
    }

    return (
      <div>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route
              exact
              path='/profile'
              render={() =>
                currentUser ? <Profile /> : <Redirect to='/auth/sign-in' />
              }
            />
            <Route
              exact
              path='/profile/settings'
              render={() =>
                currentUser ? <Profile /> : <Redirect to='/auth/sign-in' />
              }
            />
            <Route
              exact
              path='/auth/sign-in'
              render={() => (currentUser ? <Redirect to='/' /> : <SignIn />)}
            />
            <Route
              exact
              path='/auth/sign-up'
              render={() => (currentUser ? <Redirect to='/' /> : <SignUp />)}
            />
            <Route exact path='/details/:type/:id' component={ItemDetails} />
            <Route exact path='/discover' component={Discover} />
            <Route exact path='/discover/:type/:id' component={DiscoverItem} />
            <Route exact path='/search/:id' component={DiscoverItem} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser: (user) => dispatch(setCurrentUser * user),
  getUserWatchedStartAsync: (email) =>
    dispatch(getUserWatchedStartAsync(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
